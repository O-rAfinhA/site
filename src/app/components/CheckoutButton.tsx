'use client'

import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X, ArrowRight, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'

interface CheckoutButtonProps {
  planName: string
  planPrice: string
  planColor: string
}

type Step = 'form' | 'loading' | 'success' | 'error'

interface FormValues {
  nome: string
  email: string
  telefone: string
  empresa: string
  cnpj: string
}

function formatPhone(digits: string) {
  if (digits.length <= 10) {
    return digits.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3').replace(/-$/, '')
  }
  return digits.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3').replace(/-$/, '')
}

function formatCpfCnpj(digits: string) {
  if (digits.length <= 11) {
    return digits
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
  }
  return digits
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 14px',
  borderRadius: '8px',
  border: '1.5px solid #E2E8F0',
  fontSize: '0.9rem',
  color: '#0F172A',
  outline: 'none',
  boxSizing: 'border-box',
  background: '#fff',
}

export default function CheckoutButton({ planName, planPrice, planColor }: CheckoutButtonProps) {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState<Step>('form')
  const [invoiceUrl, setInvoiceUrl] = useState<string | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [form, setForm] = useState<FormValues>({ nome: '', email: '', telefone: '', empresa: '', cnpj: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    if (name === 'telefone') {
      setForm(prev => ({ ...prev, telefone: value.replace(/\D/g, '').slice(0, 11) }))
    } else if (name === 'cnpj') {
      setForm(prev => ({ ...prev, cnpj: value.replace(/\D/g, '').slice(0, 14) }))
    } else {
      setForm(prev => ({ ...prev, [name]: value }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStep('loading')
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: form.nome,
          email: form.email,
          telefone: form.telefone,
          empresa: form.empresa,
          cnpj: form.cnpj || undefined,
          plano: planName,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Erro ao processar assinatura')
      setInvoiceUrl(data.invoiceUrl)
      setStep('success')
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Erro inesperado')
      setStep('error')
    }
  }

  function handleOpenChange(v: boolean) {
    if (!v) {
      setStep('form')
      setInvoiceUrl(null)
      setErrorMsg(null)
    }
    setOpen(v)
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Trigger asChild>
        <button
          className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm text-white transition-all hover:opacity-90 mb-5"
          style={{ backgroundColor: planColor, fontWeight: 600 }}
        >
          Contratar agora
          <ArrowRight size={15} />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay
          className="fixed inset-0 bg-black/50 z-50"
          style={{ backdropFilter: 'blur(2px)' }}
        />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 w-full bg-white rounded-2xl shadow-2xl overflow-y-auto"
          style={{ maxWidth: '440px', maxHeight: '92vh' }}
          aria-describedby={undefined}
        >
          {/* Modal header */}
          <div style={{ backgroundColor: '#0B1F4B', padding: '22px 28px' }}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>
                  Contratar plano
                </p>
                <Dialog.Title style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 700, lineHeight: 1.2, margin: 0 }}>
                  {planName}
                </Dialog.Title>
                <p style={{ marginTop: '4px' }}>
                  <span style={{ color: planColor, fontSize: '1.1rem', fontWeight: 700 }}>{planPrice}</span>
                  <span style={{ color: 'rgba(255,255,255,0.35)', fontWeight: 400, fontSize: '0.82rem' }}> / mês</span>
                </p>
              </div>
              <Dialog.Close
                className="flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-white/10 shrink-0"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                <X size={18} />
              </Dialog.Close>
            </div>
          </div>

          {/* Modal body */}
          <div style={{ padding: '24px 28px' }}>
            {step === 'form' && (
              <form onSubmit={handleSubmit}>
                <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.6, marginBottom: '20px' }}>
                  Preencha os dados abaixo. Você receberá o link de pagamento e nossa equipe entrará em contato para o onboarding.
                </p>

                <div className="space-y-4">
                  {[
                    { name: 'nome', label: 'Nome completo', placeholder: 'Seu nome', type: 'text', required: true },
                    { name: 'email', label: 'E-mail corporativo', placeholder: 'voce@empresa.com', type: 'email', required: true },
                    { name: 'empresa', label: 'Empresa', placeholder: 'Nome da empresa', type: 'text', required: true },
                    { name: 'telefone', label: 'Telefone / WhatsApp', placeholder: '(00) 00000-0000', type: 'tel', required: true },
                  ].map((field) => (
                    <div key={field.name}>
                      <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                        {field.label} <span style={{ color: '#EF4444' }}>*</span>
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                        autoComplete="off"
                        value={
                          field.name === 'telefone'
                            ? formatPhone(form.telefone)
                            : form[field.name as keyof FormValues]
                        }
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = planColor)}
                        onBlur={(e) => (e.target.style.borderColor = '#E2E8F0')}
                      />
                    </div>
                  ))}

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                      CNPJ ou CPF <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="cnpj"
                      placeholder="00.000.000/0000-00 ou 000.000.000-00"
                      required
                      value={formatCpfCnpj(form.cnpj)}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = planColor)}
                      onBlur={(e) => (e.target.style.borderColor = '#E2E8F0')}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg text-white text-sm transition-all hover:opacity-90"
                  style={{ backgroundColor: planColor, fontWeight: 600, marginTop: '20px' }}
                >
                  Finalizar contratação
                  <ArrowRight size={16} />
                </button>

                <p style={{ fontSize: '0.7rem', color: '#94A3B8', textAlign: 'center', lineHeight: 1.5, marginTop: '12px' }}>
                  Sem compromisso até a confirmação do pagamento.
                </p>
              </form>
            )}

            {step === 'loading' && (
              <div className="flex flex-col items-center justify-center py-12 gap-4">
                <Loader2 size={36} className="animate-spin" style={{ color: planColor }} />
                <p style={{ fontSize: '0.9rem', color: '#64748B' }}>Preparando sua assinatura…</p>
              </div>
            )}

            {step === 'success' && (
              <div className="flex flex-col items-center text-center py-2 gap-5">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(5,150,105,0.1)' }}
                >
                  <CheckCircle2 size={28} style={{ color: '#059669' }} />
                </div>
                <div>
                  <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0B1F4B', marginBottom: '8px' }}>
                    Assinatura criada!
                  </p>
                  <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6 }}>
                    Acesse sua fatura para realizar o pagamento. Nossa equipe entrará em contato em breve para o onboarding.
                  </p>
                </div>
                {invoiceUrl ? (
                  <a
                    href={invoiceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg text-white text-sm transition-all hover:opacity-90"
                    style={{ backgroundColor: planColor, fontWeight: 600 }}
                  >
                    Acessar fatura e pagar
                    <ArrowRight size={16} />
                  </a>
                ) : (
                  <p style={{ fontSize: '0.85rem', color: '#64748B' }}>
                    O link de pagamento será enviado para o seu e-mail.
                  </p>
                )}
                <p style={{ fontSize: '0.7rem', color: '#94A3B8', lineHeight: 1.5 }}>
                  Você também receberá o link por e-mail pelo ASAAS.
                </p>
              </div>
            )}

            {step === 'error' && (
              <div className="flex flex-col items-center text-center py-2 gap-5">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(239,68,68,0.08)' }}
                >
                  <AlertCircle size={28} style={{ color: '#EF4444' }} />
                </div>
                <div>
                  <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0B1F4B', marginBottom: '8px' }}>
                    Não foi possível processar
                  </p>
                  <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6 }}>
                    {errorMsg ?? 'Ocorreu um erro inesperado. Tente novamente.'}
                  </p>
                </div>
                <button
                  onClick={() => setStep('form')}
                  className="inline-flex items-center justify-center w-full py-3 rounded-lg text-sm border transition-all hover:opacity-80"
                  style={{ color: '#0B1F4B', borderColor: '#E2E8F0', fontWeight: 600 }}
                >
                  Tentar novamente
                </button>
                <p style={{ fontSize: '0.75rem', color: '#94A3B8' }}>
                  Ou entre em contato:{' '}
                  <a href="mailto:comercial@sisteq.com.br" style={{ color: '#004BA8' }}>
                    comercial@sisteq.com.br
                  </a>
                </p>
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
