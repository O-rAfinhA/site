"use client";

import { CheckCircle2, Handshake, Users, TrendingUp, Zap, Award } from "lucide-react";
import { useState } from "react";

export default function PartnerSignupPage() {
  return (
    <>
      <PartnerSignupHero />
      <PartnerSignupForm />
      <PartnerBenefits />
    </>
  );
}

function PartnerSignupHero() {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-10 lg:pt-40 lg:pb-14"
      style={{
        background: "linear-gradient(135deg, #0B1F4B 0%, #004BA8 100%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-20"
          style={{ backgroundColor: "#10B981", filter: "blur(100px)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-15"
          style={{ backgroundColor: "#F59E0B", filter: "blur(90px)" }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 border border-emerald-400/30"
          style={{ backgroundColor: "rgba(16,185,129,0.15)" }}
        >
          <Handshake size={14} className="text-emerald-300" />
          <span
            className="text-emerald-200"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Programa de Parcerias
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
          Seja parceiro SisteQ e{" "}
          <span style={{ color: "#10B981" }}>cresça com recorrência</span>
        </h1>

        <p
          className="text-blue-100 mb-8 max-w-2xl mx-auto"
          style={{
            fontSize: "1.15rem",
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          Implantadores e indicadores podem usar o SisteQ para fortalecer sua entrega,
          escalar sua operação e criar receita recorrente com comissões mensais.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 text-blue-100">
          {[
            { icon: TrendingUp, text: "Comissão recorrente" },
            { icon: Award, text: "Suporte dedicado" },
            { icon: Users, text: "Treinamento completo" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon size={18} className="text-emerald-300" />
              <span style={{ fontSize: "0.95rem", fontWeight: 500 }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerSignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    partnerType: "",
    experience: "",
    clientsPerMonth: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Partner signup submitted:", formData);
    alert("Cadastro enviado! Nossa equipe entrará em contato em breve.");
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
              Cadastre-se como parceiro
            </h2>
            <p style={{ fontSize: "1rem", color: "#64748B", lineHeight: 1.6 }}>
              Preencha os dados abaixo para iniciar sua jornada como parceiro SisteQ.
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
                  E-mail *
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

              {/* Empresa/Consultoria */}
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
                  Empresa/Consultoria *
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
                  placeholder="Nome da empresa/consultoria"
                />
              </div>
            </div>

            {/* Tipo de parceria */}
            <div>
              <label
                htmlFor="partnerType"
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#334155",
                  marginBottom: "8px",
                }}
              >
                Tipo de parceria desejado *
              </label>
              <select
                id="partnerType"
                name="partnerType"
                required
                value={formData.partnerType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                style={{ fontSize: "0.95rem", color: formData.partnerType ? "#0F172A" : "#94A3B8" }}
              >
                <option value="">Selecione o tipo de parceria</option>
                <option value="implantador">Implantador - Consultoria que implementa e acompanha</option>
                <option value="indicador">Indicador - Indicação de leads qualificados</option>
                <option value="ambos">Ambos - Quero atuar nas duas modalidades</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Experiência */}
              <div>
                <label
                  htmlFor="experience"
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "#334155",
                    marginBottom: "8px",
                  }}
                >
                  Experiência com certificações *
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  style={{ fontSize: "0.95rem", color: formData.experience ? "#0F172A" : "#94A3B8" }}
                >
                  <option value="">Selecione sua experiência</option>
                  <option value="iniciante">Iniciante - Menos de 1 ano</option>
                  <option value="intermediario">Intermediário - 1 a 3 anos</option>
                  <option value="avancado">Avançado - 3 a 5 anos</option>
                  <option value="expert">Expert - Mais de 5 anos</option>
                </select>
              </div>

              {/* Volume de clientes */}
              <div>
                <label
                  htmlFor="clientsPerMonth"
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "#334155",
                    marginBottom: "8px",
                  }}
                >
                  Clientes atendidos por mês *
                </label>
                <select
                  id="clientsPerMonth"
                  name="clientsPerMonth"
                  required
                  value={formData.clientsPerMonth}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  style={{ fontSize: "0.95rem", color: formData.clientsPerMonth ? "#0F172A" : "#94A3B8" }}
                >
                  <option value="">Selecione o volume</option>
                  <option value="1-3">1 a 3 clientes/mês</option>
                  <option value="4-10">4 a 10 clientes/mês</option>
                  <option value="11-20">11 a 20 clientes/mês</option>
                  <option value="20+">Mais de 20 clientes/mês</option>
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
                Conte-nos sobre sua atuação (opcional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                style={{ fontSize: "0.95rem" }}
                placeholder="Descreva brevemente sua experiência, áreas de atuação, principais normas que trabalha..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg"
                style={{
                  backgroundColor: "#059669",
                  color: "#FFFFFF",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#047857")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#059669")}
              >
                Enviar Cadastro de Parceiro
              </button>
              <p
                className="text-center mt-4"
                style={{ fontSize: "0.82rem", color: "#94A3B8", lineHeight: 1.5 }}
              >
                Ao enviar, você concorda em ser contatado pela equipe de parcerias do SisteQ.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function PartnerBenefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Recorrência garantida",
      desc: "Comissão mensal sobre cada cliente ativo. Quanto mais você cresce, mais você ganha.",
    },
    {
      icon: Award,
      title: "Suporte dedicado",
      desc: "Time técnico exclusivo para parceiros com atendimento prioritário e materiais de apoio.",
    },
    {
      icon: Zap,
      title: "Onboarding acelerado",
      desc: "Treinamento completo na plataforma e metodologia para você começar a implantar rapidamente.",
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
            Por que se tornar parceiro SisteQ
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#64748B", lineHeight: 1.7 }}>
            Um programa pensado para consultorias e implantadores crescerem junto com a gente.
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
                  backgroundColor: "rgba(5,150,105,0.1)",
                }}
              >
                <benefit.icon size={28} style={{ color: "#059669" }} />
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
