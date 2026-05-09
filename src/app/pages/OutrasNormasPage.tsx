import Link from "next/link";
import {
  CheckCircle2,
  LayoutGrid,
  Rocket,
  Clock,
  ArrowRight,
  MessageCircle,
  Shield,
  Lock,
  Scale,
  FileCheck,
  Utensils,
  TrendingUp,
} from "lucide-react";

export default function OutrasNormsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Bloco 1: Hero */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden pt-16"
        style={{ backgroundColor: "#0B1F4B" }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-10"
            style={{ backgroundColor: "#7C3AED", filter: "blur(100px)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5"
            style={{ backgroundColor: "#A78BFA", filter: "blur(100px)" }}
          />
          <svg
            className="absolute inset-0 w-full h-full opacity-5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="gridOtherNorms" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gridOtherNorms)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Copy */}
            <div>
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 border border-purple-400/30"
                style={{ backgroundColor: "rgba(124,58,237,0.15)" }}
              >
                <LayoutGrid size={14} className="text-purple-300" />
                <span
                  className="text-purple-200"
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Sistemas de Gestão
                </span>
              </div>

              <h1
                className="text-white mb-6"
                style={{
                  fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                }}
              >
                SisteQ para outras normas de gestão{" "}
                <span style={{ color: "#A78BFA" }}>
                  com estrutura integrada
                </span>
              </h1>

              <p
                className="text-white/65 mb-10"
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 400,
                  lineHeight: 1.75,
                  maxWidth: "540px",
                }}
              >
                O SisteQ vai além da ISO 9001. A plataforma reúne módulos que apoiam empresas a organizar, manter e evidenciar seus sistemas de gestão, com documentos, processos, riscos, ações, auditorias, indicadores, competências e fornecedores em um único ambiente.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded text-white text-sm transition-all hover:opacity-90 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: "#004BA8",
                    fontWeight: 600,
                    boxShadow: "0 8px 24px rgba(0,75,168,0.45)",
                  }}
                >
                  Ver aderência para minha norma
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/demonstracao"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded text-white/80 text-sm border border-white/20 transition-all hover:border-white/40 hover:text-white"
                  style={{ fontWeight: 500 }}
                >
                  Falar com Especialista
                </Link>
              </div>
            </div>

            {/* Right: Visual mockup */}
            <div className="hidden lg:block">
              <PlatformMockupOtherNorms />
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 2: Frase de diferenciação */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Decorative element */}
          <div className="flex justify-center mb-8">
            <div
              className="w-16 h-1 rounded-full"
              style={{
                background: "linear-gradient(90deg, #7C3AED 0%, #A78BFA 100%)",
              }}
            />
          </div>

          <p
            className="text-center mb-8"
            style={{
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              fontWeight: 600,
              color: "#0B1F4B",
              lineHeight: 1.4,
              letterSpacing: "-0.01em",
            }}
          >
            Atender várias normas não deve ser apenas uma afirmação comercial. Precisa aparecer nos controles que o sistema entrega.
          </p>
          <p
            className="max-w-3xl mx-auto text-center"
            style={{
              fontSize: "1.1rem",
              color: "#64748B",
              lineHeight: 1.75,
              fontWeight: 400,
            }}
          >
            Muitas normas de gestão compartilham uma base comum, como documentos, processos, riscos, ações, auditorias, indicadores, competências, fornecedores e evidências. O SisteQ organiza essa estrutura em módulos integrados e deixa claro onde há base comum de gestão e onde existem recursos específicos para normas e segmentos que exigem controles próprios.
          </p>
        </div>
      </section>

      {/* Bloco 3: Cards das normas apoiadas */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <p
              className="mb-4"
              style={{
                color: "#7C3AED",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Estrutura compartilhada
            </p>
            <h2
              style={{
                fontSize: "clamp(1.85rem, 3.2vw, 2.7rem)",
                fontWeight: 700,
                color: "#0B1F4B",
                lineHeight: 1.2,
                letterSpacing: "-0.025em",
                marginBottom: "1rem",
              }}
            >
              Normas que o SisteQ pode apoiar
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "#64748B",
                lineHeight: 1.7,
                fontWeight: 400,
                maxWidth: "620px",
                margin: "0 auto",
              }}
            >
              A estrutura modular do SisteQ permite apoiar diferentes normas de gestão com os mesmos controles integrados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 mb-10">
            {/* Card 1 - ISO 45001 */}
            <NormCard
              icon={Shield}
              title="ISO 45001"
              desc="Apoio à organização de documentos, riscos, ações, treinamentos, auditorias, indicadores e evidências relacionadas à saúde e segurança ocupacional."
              color="#EF4444"
            />

            {/* Card 2 - ISO 27001 */}
            <NormCard
              icon={Lock}
              title="ISO 27001"
              desc="Apoio à gestão de documentos, riscos, controles, ações, auditorias, responsabilidades e evidências do sistema de segurança da informação."
              color="#3B82F6"
            />

            {/* Card 3 - ISO 37001 */}
            <NormCard
              icon={Scale}
              title="ISO 37001"
              desc="Apoio à organização de controles, riscos, ações, fornecedores, documentos, auditorias e registros relacionados ao sistema antissuborno."
              color="#8B5CF6"
            />

            {/* Card 4 - ISO 37301 */}
            <NormCard
              icon={FileCheck}
              title="ISO 37301"
              desc="Apoio à estruturação de controles de compliance, riscos, responsabilidades, ações, documentos, auditorias e evidências."
              color="#06B6D4"
            />

            {/* Card 5 - ISO 22000 */}
            <NormCard
              icon={Utensils}
              title="ISO 22000"
              desc="Apoio à gestão documental, processos, fornecedores, ações, auditorias, indicadores, treinamentos, manutenção e calibração."
              color="#F59E0B"
            />

            {/* Card 6 - ISO 31000 */}
            <NormCard
              icon={TrendingUp}
              title="ISO 31000"
              desc="Apoio à identificação, avaliação, tratamento e acompanhamento dos riscos organizacionais."
              color="#10B981"
            />
          </div>

          <p
            className="text-center"
            style={{
              fontSize: "0.9rem",
              color: "#94A3B8",
              fontWeight: 400,
            }}
          >
            Outras normas podem ser apoiadas pela mesma estrutura. Fale com a equipe SisteQ para análise de aderência.
          </p>
        </div>
      </section>

      {/* Bloco 4: Estrutura comum em tabela */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p
              className="mb-4"
              style={{
                color: "#7C3AED",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Base integrada
            </p>
            <h2
              style={{
                fontSize: "clamp(1.85rem, 3.2vw, 2.7rem)",
                fontWeight: 700,
                color: "#0B1F4B",
                lineHeight: 1.2,
                letterSpacing: "-0.025em",
                marginBottom: "1rem",
              }}
            >
              Como o SisteQ apoia a estrutura comum das normas
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "#64748B",
                lineHeight: 1.7,
                fontWeight: 400,
              }}
            >
              Grande parte das normas de gestão exige uma estrutura organizada para controlar documentos, responsabilidades, riscos, ações, auditorias, indicadores, competências e evidências. O SisteQ centraliza essa rotina em módulos integrados.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="bg-white rounded-xl border" style={{ borderColor: "#E2E8F0" }}>
              <table className="w-full border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}>
                    <th className="py-4 px-4 w-16"></th>
                    <th
                      className="text-left py-4 px-6"
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "#475569",
                        letterSpacing: "0.02em",
                      }}
                    >
                      Necessidade comum das normas
                    </th>
                    <th
                      className="text-left py-4 px-6"
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "#475569",
                        letterSpacing: "0.02em",
                      }}
                    >
                      Módulo do SisteQ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle2 size={18} style={{ color: "#10B981" }} />
                    </td>
                    <td className="py-4 px-6" style={{ fontSize: "0.95rem", color: "#64748B" }}>
                      Controle de documentos e registros
                    </td>
                    <td className="py-4 px-6" style={{ fontSize: "0.95rem", color: "#0B1F4B", fontWeight: 600 }}>
                      Gestão de documentos
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle2 size={18} style={{ color: "#10B981" }} />
                    </td>
                    <td className="py-4 px-6" style={{ fontSize: "0.95rem", color: "#64748B" }}>
                      Gestão de processos e responsabilidades
                    </td>
                    <td className="py-4 px-6" style={{ fontSize: "0.95rem", color: "#0B1F4B", fontWeight: 600 }}>
                      Processos
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle2 size={18} style={{ color: "#10B981" }} />
                    </td>
                    <td className="py-4 px-6" style={{ fontSize: "0.95rem", color: "#64748B" }}>
                      Indicadores e objetivos
                    </td>
                    <td className="py-4 px-6" style={{ fontSize: "0.95rem", color: "#0B1F4B", fontWeight: 600 }}>
                      Indicadores e estratégico
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle2 size={18} style={{ color: "#10B981" }} />
                    </td>
                    <td className="py-4 px-6" style={{ fontSize: "0.95rem", color: "#64748B" }}>
                      Riscos e oportunidades
                    </td>
                    <td className="py-4 px-6" style={{ fontSize: "0.95rem", color: "#0B1F4B", fontWeight: 600 }}>
                      Riscos
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle2 size={18} style={{ color: "#10B981" }} />
                    </td>
                    <td className="py-4 px-6" style={{ fontSize: "0.95rem", color: "#64748B" }}>
                      Não conformidades e melhoria contínua
                    </td>
                    <td className="py-4 px-6" style={{ fontSize: "0.95rem", color: "#0B1F4B", fontWeight: 600 }}>
                      Ações
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle2 size={18} style={{ color: "#10B981" }} />
                    </td>
                    <td className="py-4 px-6" style={{ fontSize: "0.95rem", color: "#64748B" }}>
                      Auditorias internas e externas
                    </td>
                    <td className="py-4 px-6" style={{ fontSize: "0.95rem", color: "#0B1F4B", fontWeight: 600 }}>
                      Auditorias
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle2 size={18} style={{ color: "#10B981" }} />
                    </td>
                    <td className="py-4 px-6" style={{ fontSize: "0.95rem", color: "#64748B" }}>
                      Competências, treinamentos e avaliações
                    </td>
                    <td className="py-4 px-6" style={{ fontSize: "0.95rem", color: "#0B1F4B", fontWeight: 600 }}>
                      Pessoas
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle2 size={18} style={{ color: "#10B981" }} />
                    </td>
                    <td className="py-4 px-6" style={{ fontSize: "0.95rem", color: "#64748B" }}>
                      Avaliação e homologação de fornecedores
                    </td>
                    <td className="py-4 px-6" style={{ fontSize: "0.95rem", color: "#0B1F4B", fontWeight: 600 }}>
                      Fornecedores
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle2 size={18} style={{ color: "#10B981" }} />
                    </td>
                    <td className="py-4 px-6" style={{ fontSize: "0.95rem", color: "#64748B" }}>
                      Controle de equipamentos e instrumentos
                    </td>
                    <td className="py-4 px-6" style={{ fontSize: "0.95rem", color: "#0B1F4B", fontWeight: 600 }}>
                      Manutenção e calibração
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle2 size={18} style={{ color: "#10B981" }} />
                    </td>
                    <td className="py-4 px-6" style={{ fontSize: "0.95rem", color: "#64748B" }}>
                      Evidências e rastreabilidade
                    </td>
                    <td className="py-4 px-6" style={{ fontSize: "0.95rem", color: "#0B1F4B", fontWeight: 600 }}>
                      Documentos, ações e auditorias
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 5: Normas com recursos específicos */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p
              className="mb-4"
              style={{
                color: "#7C3AED",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Recursos dedicados
            </p>
            <h2
              style={{
                fontSize: "clamp(1.85rem, 3.2vw, 2.7rem)",
                fontWeight: 700,
                color: "#0B1F4B",
                lineHeight: 1.2,
                letterSpacing: "-0.025em",
                marginBottom: "1rem",
              }}
            >
              Normas com recursos específicos
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "#64748B",
                lineHeight: 1.7,
                fontWeight: 400,
              }}
            >
              Além da base comum, o SisteQ oferece recursos dedicados a normas e segmentos com exigências próprias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card ISO 9001 - Ativo */}
            <div
              className="bg-white rounded-xl p-8 border-2 transition-all hover:shadow-lg"
              style={{ borderColor: "#3B82F6" }}
            >
              <h3
                className="mb-3"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "#0B1F4B",
                }}
              >
                ISO 9001
              </h3>
              <p
                className="mb-6"
                style={{
                  fontSize: "0.95rem",
                  color: "#64748B",
                  lineHeight: 1.65,
                }}
              >
                Plataforma completa para sistemas de gestão da qualidade, com controle de documentos, processos, auditorias, ações e indicadores.
              </p>
              <Link
                href="/solucao/iso-9001"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-colors"
                style={{ backgroundColor: "#3B82F6", color: "white" }}
              >
                Ver solução ISO 9001
                <CheckCircle2 size={16} />
              </Link>
            </div>

            {/* Card ISO 14001 - Ativo */}
            <div
              className="bg-white rounded-xl p-8 border-2 transition-all hover:shadow-lg"
              style={{ borderColor: "#10B981" }}
            >
              <h3
                className="mb-3"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "#0B1F4B",
                }}
              >
                ISO 14001
              </h3>
              <p
                className="mb-6"
                style={{
                  fontSize: "0.95rem",
                  color: "#64748B",
                  lineHeight: 1.65,
                }}
              >
                Recursos voltados à gestão ambiental, com aspectos e impactos ambientais, controles operacionais, requisitos legais, resíduos e emergências.
              </p>
              <Link
                href="/solucao/iso-14001"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-colors"
                style={{ backgroundColor: "#10B981", color: "white" }}
              >
                Ver solução ISO 14001
                <CheckCircle2 size={16} />
              </Link>
            </div>

            {/* Card PBQP-H - Ativo */}
            <div
              className="bg-white rounded-xl p-8 border-2 transition-all hover:shadow-lg"
              style={{ borderColor: "#F59E0B" }}
            >
              <h3
                className="mb-3"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "#0B1F4B",
                }}
              >
                PBQP-H
              </h3>
              <p
                className="mb-6"
                style={{
                  fontSize: "0.95rem",
                  color: "#64748B",
                  lineHeight: 1.65,
                }}
              >
                Módulo de Obras com recursos próprios da rotina de construtoras, como RDO, FVS, ROO, PCTO, PDE, PQO e controles de execução.
              </p>
              <Link
                href="/solucao/pbqp-h"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-colors"
                style={{ backgroundColor: "#F59E0B", color: "white" }}
              >
                Ver solução PBQP-H
                <CheckCircle2 size={16} />
              </Link>
            </div>

            {/* Card ISO 45001 - Em desenvolvimento */}
            <div
              className="bg-gray-50 rounded-xl p-8 border-2 transition-all"
              style={{ borderColor: "#E2E8F0", opacity: 0.7 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "#64748B",
                  }}
                >
                  ISO 45001
                </h3>
                <Clock size={18} style={{ color: "#94A3B8" }} />
              </div>
              <p
                className="mb-6"
                style={{
                  fontSize: "0.95rem",
                  color: "#94A3B8",
                  lineHeight: 1.65,
                }}
              >
                Recursos específicos para saúde e segurança ocupacional em desenvolvimento. Em breve com controles dedicados para SSO.
              </p>
              <div
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium"
                style={{ backgroundColor: "#E2E8F0", color: "#94A3B8" }}
              >
                Em desenvolvimento
                <Clock size={16} />
              </div>
            </div>

            {/* Card ISO 27001 - Em desenvolvimento */}
            <div
              className="bg-gray-50 rounded-xl p-8 border-2 transition-all"
              style={{ borderColor: "#E2E8F0", opacity: 0.7 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "#64748B",
                  }}
                >
                  ISO 27001
                </h3>
                <Clock size={18} style={{ color: "#94A3B8" }} />
              </div>
              <p
                className="mb-6"
                style={{
                  fontSize: "0.95rem",
                  color: "#94A3B8",
                  lineHeight: 1.65,
                }}
              >
                Recursos específicos para segurança da informação em desenvolvimento. Em breve com controles dedicados para SGSI.
              </p>
              <div
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium"
                style={{ backgroundColor: "#E2E8F0", color: "#94A3B8" }}
              >
                Em desenvolvimento
                <Clock size={16} />
              </div>
            </div>

            {/* Card Desenvolvimento contínuo */}
            <div
              className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-8 border-2 transition-all hover:shadow-lg"
              style={{ borderColor: "#C4B5FD" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Rocket size={24} style={{ color: "#7C3AED" }} />
              </div>
              <h3
                className="mb-3"
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 600,
                  color: "#0B1F4B",
                }}
              >
                Evolução contínua
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#64748B",
                  lineHeight: 1.65,
                }}
              >
                Estamos trabalhando para implantar novos recursos e normas continuamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 6: CTA final */}
      <section
        className="relative overflow-hidden py-28 lg:py-40"
        style={{ backgroundColor: "#0B1F4B" }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-15"
            style={{ backgroundColor: "#7C3AED", filter: "blur(120px)" }}
          />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="ctaGridOther" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ctaGridOther)" />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-10 border border-white/10 mx-auto"
            style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: "#A78BFA" }}
            />
            <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>
              Análise de aderência disponível
            </span>
          </div>

          <h2
            className="text-white mb-6"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            Quer saber se o SisteQ se aplica{" "}
            <span style={{ color: "#A78BFA" }}>à sua norma?</span>
          </h2>

          <p
            className="mx-auto mb-12"
            style={{
              fontSize: "1.125rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.75,
              maxWidth: "560px",
              fontWeight: 400,
            }}
          >
            Fale com nossa equipe e veja quais módulos fazem sentido para o seu sistema de gestão.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link
              href="/contato"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{
                backgroundColor: "#004BA8",
                fontWeight: 600,
                fontSize: "1rem",
                boxShadow: "0 12px 40px rgba(0,75,168,0.45)",
              }}
            >
              Ver aderência para minha norma
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/demonstracao"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg text-white/90 transition-all hover:text-white hover:border-white/40 border border-white/20"
              style={{
                fontWeight: 500,
                fontSize: "1rem",
              }}
            >
              <MessageCircle size={18} />
              Falar com Especialista
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            {[
              "Sem compromisso",
              "Análise personalizada",
              "Equipe especializada em gestão",
            ].map((text) => (
              <div key={text} className="flex items-center gap-2">
                <div
                  className="w-1 h-1 rounded-full"
                  style={{ backgroundColor: "#A78BFA" }}
                />
                <span
                  style={{
                    fontSize: "0.825rem",
                    color: "rgba(255,255,255,0.45)",
                    fontWeight: 400,
                  }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ── Card component for norms ── */
interface NormCardProps {
  icon: React.ComponentType<{
    size?: string | number;
    style?: React.CSSProperties;
    strokeWidth?: string | number;
  }>;
  title: string;
  desc: string;
  color: string;
}

function NormCard({ icon: Icon, title, desc, color }: NormCardProps) {
  const accent = `${color}15`;
  const borderAccent = `${color}28`;

  return (
    <div
      className="group rounded-2xl border p-7 lg:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
      style={{
        backgroundColor: "#FAFBFC",
        borderColor: borderAccent,
      }}
    >
      {/* Icon + Title */}
      <div className="flex items-start gap-4 mb-4">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: accent }}
        >
          <Icon size={20} style={{ color }} strokeWidth={2} />
        </div>
        <h3
          className="pt-1.5"
          style={{
            fontSize: "1.3rem",
            fontWeight: 700,
            color: "#0B1F4B",
            lineHeight: 1.35,
          }}
        >
          {title}
        </h3>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: "0.875rem",
          color: "#64748B",
          lineHeight: 1.7,
          fontWeight: 400,
        }}
      >
        {desc}
      </p>
    </div>
  );
}

/* ── Platform mockup visual ── */
function PlatformMockupOtherNorms() {
  return (
    <div className="relative">
      {/* Outer glow */}
      <div
        className="absolute -inset-4 rounded-2xl opacity-20"
        style={{ backgroundColor: "#7C3AED", filter: "blur(40px)" }}
      />

      {/* Main card */}
      <div
        className="relative rounded-2xl overflow-hidden border border-white/10"
        style={{
          backgroundColor: "#0F1729",
          boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
        }}
      >
        {/* Top bar */}
        <div
          className="flex items-center justify-between px-5 py-3 border-b border-white/10"
          style={{ backgroundColor: "#0B1320" }}
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#EF4444" }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#F59E0B" }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#10B981" }} />
          </div>
          <span className="text-white/40 text-xs">SisteQ · Múltiplas Normas</span>
          <div className="w-16" />
        </div>

        <div className="p-5">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { label: "Normas Ativas", value: "6", color: "#7C3AED", trend: "↑ 2" },
              { label: "Módulos Integrados", value: "10", color: "#3B82F6", trend: "→ 0" },
              { label: "Controles OK", value: "94%", color: "#10B981", trend: "↑ 3%" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg p-3 border border-white/10"
                style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
              >
                <div
                  className="text-xs mb-1"
                  style={{ color: "rgba(255,255,255,0.4)", fontWeight: 400 }}
                >
                  {stat.label}
                </div>
                <div
                  className="text-lg"
                  style={{ color: stat.color, fontWeight: 700, lineHeight: 1.2 }}
                >
                  {stat.value}
                </div>
                <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {stat.trend} este mês
                </div>
              </div>
            ))}
          </div>

          {/* Norms list */}
          <div className="space-y-2">
            {[
              { label: "ISO 9001 · Qualidade", status: "", color: "#10B981", pct: 100 },
              { label: "ISO 14001 · Ambiental", status: "", color: "#10B981", pct: 100 },
              { label: "PBQP-H · Obras", status: "", color: "#10B981", pct: 100 },
              { label: "ISO 45001 · SSO", status: "", color: "#F59E0B", pct: 75 },
              { label: "ISO 27001 · Segurança da Informação", status: "", color: "#F59E0B", pct: 75 },
              { label: "ISO 37001 · Antissuborno", status: "", color: "#EAB308", pct: 50 },
              { label: "ISO 22000 · Segurança Alimentar", status: "", color: "#EAB308", pct: 50 },
              { label: "ISO 31000 · Riscos", status: "", color: "#EAB308", pct: 50 },
              { label: "ISO 37301 · Compliance", status: "", color: "#EAB308", pct: 50 },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded px-3 py-2 border border-white/5"
                style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
              >
                <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", fontWeight: 400 }}>
                  {item.label}
                </span>
                <div className="flex items-center gap-2">
                  <div
                    className="w-16 h-1 rounded-full overflow-hidden"
                    style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${item.pct}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
