import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  const key = process.env['ASAAS_API_KEY']
  const baseUrl = process.env['ASAAS_BASE_URL']
  const smtpUser = process.env['SMTP_USER']
  const smtpPass = process.env['SMTP_PASS']
  return NextResponse.json({
    asaas: {
      hasKey: !!key,
      keyLength: key?.length ?? 0,
      keyPrefix: key ? key.slice(0, 6) : null,
      hasBaseUrl: !!baseUrl,
    },
    smtp: {
      hasUser: !!smtpUser,
      hasPass: !!smtpPass,
    },
    nodeEnv: process.env['NODE_ENV'],
    allEnvKeys: Object.keys(process.env).filter(k => !k.startsWith('npm_') && !k.startsWith('NODE')),
  })
}
