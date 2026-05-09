"use client";

import { CheckCircle2, Calendar, Users, Zap, Shield, ChevronRight } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export default function DemoPage() {
  return (
    <>
      <DemoHero />
      <DemoForm />
      <WhyDemo />
      <DemoFAQ />
    </>
  );
}

function DemoHero() {
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
          <Zap size={14} className="text-blue-300" />
          <span
            className="text-blue-200"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Demonstração Personalizada
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
          Veja o SisteQ funcionando na prática.
        </h1>

        <p
          className="text-blue-100 mb-8 max-w-2xl mx-auto"
          style={{
            fontSize: "1.15rem",
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          Agende uma demonstração de 30 minutos e descubra como estruturar a gestão da sua empresa e acabar com as dores de cabeça com certificações.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 text-blue-100">
          {[
            { icon: Calendar, text: "30 minutos" },
            { icon: Users, text: "Demonstração ao vivo" },
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

function DemoForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    solution: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Solicitação enviada! Entraremos em contato em breve.");
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
              Solicite sua demonstração
            </h2>
            <p style={{ fontSize: "1rem", color: "#64748B", lineHeight: 1.6 }}>
              Preencha os dados abaixo e nossa equipe entrará em contato para agendar.
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

            {/* Solução */}
            <div>
              <label
                htmlFor="solution"
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#334155",
                  marginBottom: "8px",
                }}
              >
                Solução de interesse *
              </label>
              <select
                id="solution"
                name="solution"
                required
                value={formData.solution}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                style={{ fontSize: "0.95rem", color: formData.solution ? "#0F172A" : "#94A3B8" }}
              >
                <option value="">Selecione a solução</option>
                <option value="iso9001">ISO 9001 - Gestão da Qualidade</option>
                <option value="iso14001">ISO 14001 - Gestão Ambiental</option>
                <option value="pbqph">PBQP-H - Construção Civil</option>
                <option value="multiplas">Múltiplas soluções</option>
                <option value="nao-sei">Ainda não sei</option>
              </select>
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
                Mensagem (opcional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                style={{ fontSize: "0.95rem" }}
                placeholder="Conte-nos um pouco sobre suas necessidades..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg"
                style={{
                  backgroundColor: "#004BA8",
                  color: "#FFFFFF",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#003A85")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#004BA8")}
              >
                Solicitar Demonstração
              </button>
              <p
                className="text-center mt-4"
                style={{ fontSize: "0.82rem", color: "#94A3B8", lineHeight: 1.5 }}
              >
                Ao enviar, você concorda em ser contatado por nossa equipe comercial.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function WhyDemo() {
  const benefits = [
    {
      icon: Zap,
      title: "Demonstração personalizada",
      desc: "Mostramos exatamente os módulos e recursos que fazem sentido para o seu caso.",
    },
    {
      icon: Users,
      title: "Tire todas as dúvidas",
      desc: "Sessão ao vivo com especialista que conhece profundamente as normas e a plataforma.",
    },
    {
      icon: CheckCircle2,
      title: "Veja dados reais",
      desc: "Casos de uso reais, dashboards preenchidos, relatórios prontos. Não é slideware.",
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
            O que você verá na demonstração
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#64748B", lineHeight: 1.7 }}>
            Uma sessão prática de 30 minutos focada nas suas necessidades.
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

const demoFaqs = [
  {
    question: "Quanto tempo dura a demonstração?",
    answer:
      "Cerca de 30 minutos. Adaptamos o tempo conforme suas perguntas e o nível de profundidade que você quer explorar.",
  },
  {
    question: "A demonstração é online ou presencial?",
    answer:
      "Online, ao vivo, com compartilhamento de tela. Você participa de onde estiver, pelo computador.",
  },
  {
    question: "Preciso me preparar antes da demonstração?",
    answer:
      "Não é necessário. Mas se você puder nos enviar antes uma breve descrição do seu segmento, tamanho da empresa e principais dores na gestão, conseguimos focar exatamente no que faz sentido para o seu caso.",
  },
  {
    question: "Quem participa da demonstração do lado do SisteQ?",
    answer:
      "Um especialista que conhece a plataforma e a rotina de empresas certificadas. Não é vendedor lendo script — é alguém que entende sua realidade de gestão.",
  },
  {
    question: "Vou ver dados reais ou apresentação em slides?",
    answer:
      "Dados reais. Mostramos a plataforma funcionando, com dashboards preenchidos, documentos organizados, indicadores em tempo real. Não trabalhamos com slideware.",
  },
  {
    question: "Quem da minha equipe deveria participar?",
    answer:
      "O ideal é ter pelo menos a pessoa responsável pela gestão da qualidade ou pela rotina operacional, e quem decide pela contratação. Outros perfis podem participar conforme a relevância do tema para a empresa.",
  },
  {
    question: "A demonstração tem custo ou compromisso?",
    answer:
      "Não. A demonstração é gratuita e sem compromisso. Se ao final você concluir que o SisteQ não é o melhor caminho para o seu momento, está tudo certo.",
  },
  {
    question: "Qual é o próximo passo depois da demonstração?",
    answer:
      "Se fizer sentido, enviamos uma proposta com o plano recomendado para a sua realidade. Você analisa sem pressão. Quando decidir avançar, iniciamos o onboarding.",
  },
];

function DemoFAQ() {
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
            Como funciona a demonstração
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#64748B",
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            Esclareça suas dúvidas antes de agendar.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-2xl border p-2" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
          <Accordion type="single" collapsible className="w-full">
            {demoFaqs.map((faq, index) => (
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
