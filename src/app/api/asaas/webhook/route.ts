import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const DESTINATARIOS = ['zilli@sisteq.com.br', 'comercial@sisteq.com.br']

const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(req: NextRequest) {
  try {
    const token = req.headers.get('asaas-access-token')
    if (process.env.ASAAS_WEBHOOK_TOKEN && token !== process.env.ASAAS_WEBHOOK_TOKEN) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const payload = await req.json()
    const event: string = payload.event
    const payment = payload.payment

    // Only handle prospects from the landing page
    const extRef: string = payment?.externalReference ?? ''
    if (!extRef.startsWith('site:')) {
      return NextResponse.json({ ok: true })
    }

    if (event === 'PAYMENT_RECEIVED' || event === 'PAYMENT_CONFIRMED') {
      const prospectEmail = extRef.replace('site:', '')
      const value: number = payment.value ?? 0
      const description: string = payment.description ?? ''
      const planMatch = description.match(/Plano\s+(\S+)/i)
      const planName = planMatch ? planMatch[1] : 'desconhecido'
      const valueFormatted = value.toFixed(2).replace('.', ',')
      const now = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })

      await transporter.sendMail({
        from: '"SisteQ Site" <rafael@sisteq.com.br>',
        to: DESTINATARIOS,
        subject: `[SisteQ] Pagamento confirmado — Plano ${planName} — ${prospectEmail}`,
        html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="font-family:Inter,Arial,sans-serif;background:#f8fafc;margin:0;padding:32px">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.08)">
    <div style="background:#059669;padding:24px 32px">
      <p style="color:#fff;font-size:20px;font-weight:700;margin:0">Novo Pagamento Confirmado</p>
      <p style="color:rgba(255,255,255,0.7);font-size:13px;margin:4px 0 0">SisteQ · ${now}</p>
    </div>
    <div style="padding:24px 32px">
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        <tr>
          <td style="padding:8px 12px;font-weight:600;color:#334155;width:140px;vertical-align:top">E-mail</td>
          <td style="padding:8px 12px;color:#0f172a">${prospectEmail}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;font-weight:600;color:#334155;vertical-align:top">Plano</td>
          <td style="padding:8px 12px;color:#0f172a">${planName}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;font-weight:600;color:#334155;vertical-align:top">Valor</td>
          <td style="padding:8px 12px;color:#059669;font-weight:700">R$ ${valueFormatted}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;font-weight:600;color:#334155;vertical-align:top">Evento</td>
          <td style="padding:8px 12px;color:#64748b">${event}</td>
        </tr>
      </table>
      <div style="margin-top:20px;padding:16px;background:#f0fdf4;border-radius:8px;border-left:3px solid #059669">
        <p style="font-size:14px;color:#166534;margin:0;font-weight:500">
          Ação: criar a conta do cliente no SisteQ e iniciar o onboarding.
        </p>
      </div>
      <div style="margin-top:20px;padding-top:16px;border-top:1px solid #e2e8f0">
        <p style="font-size:12px;color:#94a3b8;margin:0">Acesse o painel ASAAS para mais detalhes do pagamento.</p>
      </div>
    </div>
  </div>
</body>
</html>`,
      })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[POST /api/asaas/webhook]', err)
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
  }
}
