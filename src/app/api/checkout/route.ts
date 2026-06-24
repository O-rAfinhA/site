import { NextRequest, NextResponse } from 'next/server'

const ASAAS_BASE_URL = process.env.ASAAS_BASE_URL ?? 'https://sandbox.asaas.com/api/v3'
const ASAAS_API_KEY = process.env.ASAAS_API_KEY ?? ''

const PLAN_VALUES: Record<string, number> = {
  essencial: 697.0,
  gestao: 997.0,
  gestão: 997.0,
  performance: 1497.0,
}

function planValue(plano: string): number | null {
  return PLAN_VALUES[plano.toLowerCase()] ?? null
}

function nextDueDateStr(): string {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  return d.toISOString().split('T')[0]
}

async function asaas(path: string, method: string, body?: unknown) {
  const res = await fetch(`${ASAAS_BASE_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      access_token: ASAAS_API_KEY,
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  })
  const data = await res.json()
  if (!res.ok) {
    const msg =
      (data.errors as Array<{ description?: string }>)?.[0]?.description ??
      (data.error as string | undefined) ??
      `ASAAS error ${res.status}`
    throw new Error(msg)
  }
  return data
}

export async function POST(req: NextRequest) {
  try {
    const {
      nome,
      email,
      telefone,
      empresa,
      cnpj,
      plano,
    }: {
      nome: string
      email: string
      telefone: string
      empresa: string
      cnpj?: string
      plano: string
    } = await req.json()

    if (!nome || !email || !telefone || !empresa || !plano) {
      return NextResponse.json({ error: 'Campos obrigatórios ausentes' }, { status: 400 })
    }

    const value = planValue(plano)
    if (!value) {
      return NextResponse.json({ error: 'Plano inválido' }, { status: 400 })
    }

    const planLabel = plano.charAt(0).toUpperCase() + plano.slice(1)
    const externalReference = `site:${email}`

    // Find or create ASAAS customer
    let customerId: string
    const search: { data?: Array<{ id: string }> } = await asaas(
      `/customers?email=${encodeURIComponent(email)}&limit=1`,
      'GET',
    )
    if (search.data && search.data.length > 0) {
      customerId = search.data[0].id
    } else {
      const customer: { id: string } = await asaas('/customers', 'POST', {
        name: nome,
        email,
        mobilePhone: telefone.replace(/\D/g, ''),
        company: empresa,
        ...(cnpj ? { cpfCnpj: cnpj.replace(/\D/g, '') } : {}),
        externalReference,
      })
      customerId = customer.id
    }

    // Create monthly subscription
    const subscription: { id: string } = await asaas('/subscriptions', 'POST', {
      customer: customerId,
      billingType: 'UNDEFINED',
      cycle: 'MONTHLY',
      value,
      nextDueDate: nextDueDateStr(),
      description: `SisteQ — Plano ${planLabel}`,
      externalReference,
    })

    // Fetch first payment to get invoice URL
    let invoiceUrl: string | null = null
    try {
      const payments: { data?: Array<{ invoiceUrl?: string }> } = await asaas(
        `/subscriptions/${subscription.id}/payments?limit=1`,
        'GET',
      )
      invoiceUrl = payments.data?.[0]?.invoiceUrl ?? null
    } catch {
      // Non-fatal: ASAAS will email the invoice link to the customer
    }

    return NextResponse.json({ ok: true, invoiceUrl, subscriptionId: subscription.id })
  } catch (err) {
    console.error('[POST /api/checkout]', err)
    const message = err instanceof Error ? err.message : 'Erro interno'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
