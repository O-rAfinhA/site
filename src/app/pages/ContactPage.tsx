"use client";

import { CheckCircle2, MessageCircle, Users, Clock, Shield, Mail } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <WhyContact />
      <ContactFAQ />
    </>
  );
}

function ContactHero() {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-10 lg:pt-40 lg:pb-14"
      style={{
        background: "linear-gradient(135deg, #004BA8 0%, #0B1F4B 100%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-20"
          style={{ backgroundColor: "#60A5FA", filter: "blur(100px)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-15"
          style={{ backgroundColor: "#10B981", filter: "blur(90px)" }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 border border-blue-400/30"
          style={{ backgroundColor: "rgba(96,165,250,0.15)" }}
        >
          <MessageCircle size={14} className="text-blue-300" />
          <span
            className="text-blue-200"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Fale Conosco
          </span>
        </div>

        <h1
          className="text-white mb-6"
          style={{
            fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
          }}
        >
          Entre em contato com nossa equipe.
        </h1>

        <p
          className="text-blue-100 mb-8 max-w-2xl mx-auto"
          style={{
            fontSize: "1.15rem",
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          Quer saber se o SisteQ se aplica à sua norma? Tire suas dúvidas sobre nossa plataforma ou fale sobre as necessidades da sua empresa.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 text-blue-100">
          {[
            { icon: Clock, text: "Resposta em até 24h" },
            { icon: Users, text: "Atendimento personalizado" },
            { icon: Shield, text: "Sem compromisso" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon size={18} className="text-blue-300" />
              <span style={{ fontSize: "0.95rem", fontWeight: 500 }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    interest: "",
    message: "",
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tipo: 'contato', ...formData }),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', position: '', interest: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 -mt-20 relative z-10">
        <div
          className="rounded-3xl p-8 lg:p-12 shadow-xl"
          style={{
            backgroundColor: "#FFFFFF",
          }}
        >
          <div className="mb-10 text-center">
            <h2
              className="mb-4"
              style={{
                fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
                fontWeight: 700,
                color: "#0B1F4B",
                lineHeight: 1.2,
              }}
            >
              Envie sua mensagem
            </h2>
            <p style={{ fontSize: "1rem", color: "#64748B", lineHeight: 1.6 }}>
              Preencha os dados abaixo e nossa equipe entrará em contato.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nome */}
              <div>
                <label
                  htmlFor="name"
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "#334155",
                    marginBottom: "8px",
                  }}
                >
                  Nome completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  style={{ fontSize: "0.95rem" }}
                  placeholder="Seu nome"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "#334155",
                    marginBottom: "8px",
                  }}
                >
                  E-mail corporativo *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  style={{ fontSize: "0.95rem" }}
                  placeholder="seu.email@empresa.com.br"
                />
              </div>

              {/* Telefone */}
              <div>
                <label
                  htmlFor="phone"
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "#334155",
                    marginBottom: "8px",
                  }}
                >
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  style={{ fontSize: "0.95rem" }}
                  placeholder="(00) 00000-0000"
                />
              </div>

              {/* Empresa */}
              <div>
                <label
                  htmlFor="company"
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "#334155",
                    marginBottom: "8px",
                  }}
                >
                  Empresa *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  style={{ fontSize: "0.95rem" }}
                  placeholder="Nome da empresa"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Cargo */}
              <div>
                <label
                  htmlFor="position"
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "#334155",
                    marginBottom: "8px",
                  }}
                >
                  Cargo
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  style={{ fontSize: "0.95rem" }}
                  placeholder="Seu cargo na empresa"
                />
              </div>

              {/* Interesse */}
              <div>
                <label
                  htmlFor="interest"
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "#334155",
                    marginBottom: "8px",
                  }}
                >
                  Assunto de interesse *
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  style={{ fontSize: "0.95rem", color: formData.interest ? "#0F172A" : "#94A3B8" }}
                >
                  <option value="">Selecione o assunto</option>
                  <option value="aderencia">Ver aderência para minha norma</option>
                  <option value="iso9001">ISO 9001 - Gestão da Qualidade</option>
                  <option value="iso14001">ISO 14001 - Gestão Ambiental</option>
                  <option value="pbqph">PBQP-H - Construção Civil</option>
                  <option value="outras-normas">Outras normas (ISO 45001, 27001, etc.)</option>
                  <option value="demonstracao">Solicitar demonstração</option>
                  <option value="comercial">Informações comerciais</option>
                  <option value="suporte">Suporte técnico</option>
                  <option value="parceria">Parceria</option>
                  <option value="outro">Outro assunto</option>
                </select>
              </div>
            </div>

            {/* Mensagem */}
            <div>
              <label
                htmlFor="message"
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#334155",
                  marginBottom: "8px",
                }}
              >
                Mensagem *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                style={{ fontSize: "0.95rem" }}
                placeholder="Conte-nos sobre suas necessidades, dúvidas ou qual norma você precisa avaliar..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              {status === 'success' ? (
                <div className="w-full px-8 py-4 rounded-lg text-center" style={{ backgroundColor: "#d1fae5", color: "#065f46", fontSize: "1rem", fontWeight: 600 }}>
                  ✓ Mensagem enviada! Entraremos em contato em breve.
                </div>
              ) : (
                <>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg"
                    style={{
                      backgroundColor: status === 'sending' ? "#6b8fc4" : "#004BA8",
                      color: "#FFFFFF",
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      border: "none",
                      cursor: status === 'sending' ? "not-allowed" : "pointer",
                    }}
                  >
                    {status === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
                  </button>
                  {status === 'error' && (
                    <p className="text-center mt-3" style={{ fontSize: "0.875rem", color: "#dc2626" }}>
                      Erro ao enviar. Tente novamente ou entre em contato por e-mail.
                    </p>
                  )}
                  <p className="text-center mt-4" style={{ fontSize: "0.82rem", color: "#94A3B8", lineHeight: 1.5 }}>
                    Ao enviar, você concorda em ser contatado por nossa equipe.
                  </p>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function WhyContact() {
  const benefits = [
    {
      icon: MessageCircle,
      title: "Atendimento consultivo",
      desc: "Nossa equipe conhece profundamente as normas e pode orientar sobre a melhor solução para seu caso.",
    },
    {
      icon: Users,
      title: "Análise de aderência",
      desc: "Avaliamos se o SisteQ atende sua norma específica e quais módulos fazem sentido para sua empresa.",
    },
    {
      icon: CheckCircle2,
      title: "Sem compromisso",
      desc: "Não há custo nem obrigação. Se nossa plataforma não for ideal para você, tudo bem.",
    },
  ];

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="mb-4"
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.4rem)",
              fontWeight: 700,
              color: "#0B1F4B",
              lineHeight: 1.2,
            }}
          >
            Como podemos ajudar
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#64748B", lineHeight: 1.7 }}>
            Estamos prontos para responder suas dúvidas e avaliar se o SisteQ é ideal para você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="text-center p-8 rounded-2xl"
              style={{
                backgroundColor: "#F8FAFC",
                border: "1px solid #E2E8F0",
              }}
            >
              <div
                className="inline-flex items-center justify-center mb-5 rounded-xl"
                style={{
                  width: "56px",
                  height: "56px",
                  backgroundColor: "rgba(0,75,168,0.1)",
                }}
              >
                <benefit.icon size={28} style={{ color: "#004BA8" }} />
              </div>
              <h3
                className="mb-3"
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 600,
                  color: "#0B1F4B",
                  lineHeight: 1.3,
                }}
              >
                {benefit.title}
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#64748B",
                  lineHeight: 1.6,
                }}
              >
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const contactFaqs = [
  {
    question: "O SisteQ atende normas além da ISO 9001, 14001 e PBQP-H?",
    answer:
      "Sim. A estrutura do SisteQ apoia diversas normas como ISO 45001, ISO 27001, ISO 37001, ISO 37301, ISO 22000, ISO 31000 e outras. Entre em contato para avaliarmos a aderência específica da sua norma.",
  },
  {
    question: "Preciso de conhecimento técnico para usar o SisteQ?",
    answer:
      "Não. O SisteQ foi desenvolvido para ser intuitivo e acessível. Durante o onboarding, nossa equipe fornece treinamento completo para sua equipe começar a usar a plataforma com confiança.",
  },
  {
    question: "Vocês oferecem suporte após a contratação?",
    answer:
      "Sim. Todos os planos incluem suporte técnico. Além disso, oferecemos material de ajuda, vídeos tutoriais e acompanhamento para garantir que você tire o máximo proveito da plataforma.",
  },
  {
    question: "Vocês atendem empresas de todos os portes?",
    answer:
      "Sim. O SisteQ é utilizado desde pequenas empresas até grandes organizações. Temos planos adequados para diferentes portes e necessidades.",
  },
  {
    question: "Como funciona o processo de implementação?",
    answer:
      "Após a contratação, iniciamos o onboarding com configuração da plataforma, migração de dados (se necessário), treinamento da equipe e acompanhamento inicial. O processo é adaptado à realidade da sua empresa.",
  },
];

function ContactFAQ() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="mb-4"
            style={{
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#004BA8",
              textTransform: "uppercase",
            }}
          >
            Perguntas Frequentes
          </p>
          <h2
            className="mb-4"
            style={{
              fontSize: "clamp(1.85rem, 3.2vw, 2.7rem)",
              fontWeight: 700,
              color: "#0B1F4B",
              lineHeight: 1.2,
              letterSpacing: "-0.025em",
            }}
          >
            Dúvidas comuns
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#64748B",
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            Respostas rápidas para as perguntas mais frequentes.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-2xl border p-2" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
          <Accordion type="single" collapsible className="w-full">
            {contactFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-0"
              >
                <AccordionTrigger
                  className="px-6 py-5 hover:no-underline hover:bg-gray-50 rounded-lg transition-colors"
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    color: "#0B1F4B",
                    textAlign: "left",
                    lineHeight: 1.4,
                  }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  className="px-6 pb-5 pt-0"
                  style={{
                    fontSize: "0.9375rem",
                    color: "#64748B",
                    lineHeight: 1.65,
                    fontWeight: 400,
                  }}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
