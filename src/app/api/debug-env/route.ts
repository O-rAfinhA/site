import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  const key = process.env['ASAAS_API_KEY']
  const baseUrl = process.env['ASAAS_BASE_URL']
  return NextResponse.json({
    hasKey: !!key,
    keyLength: key?.length ?? 0,
    keyPrefix: key ? key.slice(0, 6) : null,
    hasBaseUrl: !!baseUrl,
    baseUrl: baseUrl ?? null,
    nodeEnv: process.env['NODE_ENV'],
  })
}
