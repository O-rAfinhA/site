import { Layers, Target, TrendingUp, Shield, Users, Zap, Award, Cloud } from "lucide-react";

const differentials = [
  {
    icon: Award,
    title: "Profundidade técnica que poucos sistemas têm",
    desc: "Maioria das plataformas de qualidade trata obra como apêndice, mas no SisteQ ela é pilar de sustentação de toda gestão.",
    color: "#B45A1C",
    bg: "rgba(180,90,28,0.08)",
  },
  {
    icon: Layers,
    title: "Solução organizada para a rotina de obras",
    desc: "Não é uma lista de módulos soltos. É uma estrutura pensada para atender o PBQP-H de forma integrada, do início ao fim.",
    color: "#D97706",
    bg: "rgba(217,119,6,0.08)",
  },
  {
    icon: Target,
    title: "Clareza para acompanhar status de obras",
    desc: "Veja em tempo real quais obras estão em dia, quais RDOs estão pendentes e o que precisa de atenção antes da auditoria.",
    color: "#059669",
    bg: "rgba(5,150,105,0.08)",
  },
  {
    icon: TrendingUp,
    title: "Menos dependência de planilhas e controles paralelos",
    desc: "Tudo em uma única plataforma: obras, RDO, FVS, fornecedores, ensaios e ações conversam entre si.",
    color: "#7C3AED",
    bg: "rgba(124,58,237,0.08)",
  },
  {
    icon: Shield,
    title: "Visão mais integrada da gestão de obras",
    desc: "Análise crítica, dashboards consolidados e relatórios prontos para reunião de direção — sem coleta manual.",
    color: "#0891B2",
    bg: "rgba(8,145,178,0.08)",
  },
  {
    icon: Cloud,
    title: "Hospedagem AWS",
    desc: "Sua gestão protegida pela mesma infraestrutura de nuvem usada por bancos, hospitais e órgãos governamentais ao redor do mundo.",
    color: "#B45A1C",
    bg: "rgba(180,90,28,0.08)",
  },
];

export function ResultsPBQPH() {
  return (
    <section id="diferenciais" className="py-24 lg:py-32" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p
            className="mb-4"
            style={{
              color: "#B45A1C",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Por que escolher o SisteQ
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 700,
              color: "#0B1F4B",
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            Diferenciais que fazem sentido para quem trabalha com PBQP-H
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#64748B",
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            Não é só tecnologia. É maturidade na gestão de obras, traduzida em funcionalidades práticas.
          </p>
        </div>

        {/* Differential cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((diff, i) => {
            const Icon = diff.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-xl border transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
                style={{
                  backgroundColor: "#FAFAFA",
                  borderColor: "rgba(180,90,28,0.1)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                  style={{ backgroundColor: diff.bg }}
                >
                  <Icon size={22} style={{ color: diff.color }} strokeWidth={2} />
                </div>
                <h3
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "#0B1F4B",
                    lineHeight: 1.4,
                    marginBottom: "8px",
                  }}
                >
                  {diff.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#64748B",
                    lineHeight: 1.65,
                    fontWeight: 400,
                  }}
                >
                  {diff.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom highlight */}
        <div className="mt-16">
          <div
            className="p-8 rounded-2xl border"
            style={{
              backgroundColor: "rgba(180,90,28,0.04)",
              borderColor: "rgba(180,90,28,0.12)",
            }}
          >
            <div className="max-w-3xl mx-auto text-center">
              <p style={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.7, fontWeight: 400 }}>
                O SisteQ não nasceu como software genérico. <strong style={{ color: "#0B1F4B", fontWeight: 600 }}>Foi criado a partir da experiência real com implantação e manutenção de sistemas de gestão PBQP-H</strong> — por quem entende o dia a dia da construção civil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
