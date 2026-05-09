import { Monitor, BarChart3, Bell, FileCheck2, ArrowRight } from "lucide-react";

const experiences = [
  {
    icon: Monitor,
    step: "01",
    title: "Painel centralizado com visão ambiental completa",
    desc: "Ao entrar no SisteQ, o gestor enxerga de imediato o estado do sistema ambiental: pendências, prazos de licenças, aspectos significativos e status de cada frente — sem precisar navegar por dezenas de telas.",
    color: "#059669",
    bg: "rgba(5,150,105,0.07)",
  },
  {
    icon: Bell,
    step: "02",
    title: "Alertas inteligentes antes dos vencimentos",
    desc: "Licenças próximas do vencimento, requisitos legais a vencer, ações ambientais fora do prazo e auditorias pendentes geram notificações automáticas para os responsáveis.",
    color: "#D97706",
    bg: "rgba(217,119,6,0.07)",
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Dashboards que orientam a decisão ambiental",
    desc: "Indicadores ambientais, metas de redução, consumo de recursos e geração de resíduos consolidados em gráficos de fácil leitura — dados prontos para análise crítica.",
    color: "#10B981",
    bg: "rgba(16,185,129,0.07)",
  },
  {
    icon: FileCheck2,
    step: "04",
    title: "Evidências organizadas para auditoria",
    desc: "Aspectos, requisitos legais, MTRs, relatórios de monitoramento e planos de emergência ficam organizados e acessíveis a qualquer momento — prontos para qualquer auditor.",
    color: "#7C3AED",
    bg: "rgba(124,58,237,0.07)",
  },
];

const dailyActions = [
  "Registrar não conformidade ambiental com origem rastreável",
  "Abrir ação corretiva vinculada a aspecto ambiental",
  "Atualizar indicador de consumo com cálculo automático",
  "Acompanhar vencimentos de licenças e requisitos legais",
  "Gerar relatório de análise crítica ambiental",
  "Consultar destinação de resíduos e MTRs",
];

export function HowItWorks14001() {
  return (
    <section
      id="funcionalidades"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <p
            className="mb-4"
            style={{
              color: "#059669",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Experiência no dia a dia
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
            Como o SisteQ funciona na prática
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#64748B",
              lineHeight: 1.7,
              fontWeight: 400,
              maxWidth: "620px",
            }}
          >
            Não é só estrutura. É uma experiência pensada para que o gestor ambiental tenha controle real sem complexidade desnecessária.
          </p>
        </div>

        {/* Experience cards – staggered 2-col */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {experiences.map((exp) => {
            const Icon = exp.icon;
            return (
              <div
                key={exp.step}
                className="rounded-2xl border p-7 lg:p-9 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#FAFBFC",
                  borderColor: "rgba(0,0,0,0.06)",
                }}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: exp.bg }}
                  >
                    <Icon size={20} style={{ color: exp.color }} strokeWidth={2} />
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        color: exp.color,
                        opacity: 0.5,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {exp.step}
                    </span>
                    <h3
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "#0B1F4B",
                        lineHeight: 1.35,
                      }}
                    >
                      {exp.title}
                    </h3>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#64748B",
                    lineHeight: 1.7,
                    fontWeight: 400,
                    paddingLeft: "3.75rem",
                  }}
                >
                  {exp.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quick actions strip */}
        <div
          className="rounded-2xl border p-8 lg:p-10"
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "rgba(5,150,105,0.1)",
          }}
        >
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="lg:w-1/3">
              <p
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  color: "#94A3B8",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                }}
              >
                Ações do dia a dia
              </p>
              <p
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#0B1F4B",
                  lineHeight: 1.35,
                  marginBottom: "0.5rem",
                }}
              >
                Tudo o que sua equipe faz com poucos cliques
              </p>
              <p style={{ fontSize: "0.85rem", color: "#64748B", lineHeight: 1.65 }}>
                Operações recorrentes da ISO 14001, simplificadas e integradas dentro do sistema.
              </p>
            </div>
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-3">
              {dailyActions.map((action) => (
                <div
                  key={action}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{
                    backgroundColor: "rgba(5,150,105,0.04)",
                    border: "1px solid rgba(5,150,105,0.08)",
                  }}
                >
                  <ArrowRight size={14} style={{ color: "#059669", flexShrink: 0, opacity: 0.5 }} />
                  <span style={{ fontSize: "0.83rem", color: "#334155", fontWeight: 500 }}>
                    {action}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
