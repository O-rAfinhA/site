import { Layers, Target, TrendingUp, Shield, Users, Zap, Cloud } from "lucide-react";

const differentials = [
  {
    icon: Layers,
    title: "Útil para implantação e manutenção, organizado por norma",
    desc: "Atende empresas em processo de certificação e empresas já certificadas que precisam manter o sistema vivo, com configuração estruturada para cada norma.",
    color: "#059669",
    bg: "rgba(5,150,105,0.08)",
  },
  {
    icon: Target,
    title: "Clareza para acompanhar conformidade legal",
    desc: "Veja em tempo real quais requisitos legais estão em dia, quais estão próximos do vencimento e o que precisa de atenção.",
    color: "#10B981",
    bg: "rgba(16,185,129,0.08)",
  },
  {
    icon: TrendingUp,
    title: "Menos dependência de planilhas e controles paralelos",
    desc: "Tudo em uma única plataforma: aspectos, legislação, resíduos, indicadores, metas e ações conversam entre si.",
    color: "#D97706",
    bg: "rgba(217,119,6,0.08)",
  },
  {
    icon: Shield,
    title: "Visão mais integrada da gestão ambiental",
    desc: "Análise crítica, dashboards consolidados e relatórios prontos para reunião de direção — sem coleta manual.",
    color: "#DC2626",
    bg: "rgba(220,38,38,0.08)",
  },
  {
    icon: Users,
    title: "Funciona com outras consultorias e equipes internas",
    desc: "O SisteQ não trava você em uma consultoria específica. É uma ferramenta independente, flexível e profissional.",
    color: "#0891B2",
    bg: "rgba(8,145,178,0.08)",
  },
  {
    icon: Cloud,
    title: "Hospedagem AWS",
    desc: "Sua gestão protegida pela mesma infraestrutura de nuvem usada por bancos, hospitais e órgãos governamentais ao redor do mundo.",
    color: "#059669",
    bg: "rgba(5,150,105,0.08)",
  },
];

export function Results14001() {
  return (
    <section id="diferenciais" className="py-24 lg:py-32" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p
            className="mb-4"
            style={{
              color: "#059669",
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
            Diferenciais que fazem sentido para quem trabalha com ISO 14001
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#64748B",
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            Não é só tecnologia. É maturidade na gestão ambiental, traduzida em funcionalidades práticas.
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
                  borderColor: "rgba(5,150,105,0.1)",
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
              backgroundColor: "rgba(5,150,105,0.04)",
              borderColor: "rgba(5,150,105,0.12)",
            }}
          >
            <div className="max-w-3xl mx-auto text-center">
              <p style={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.7, fontWeight: 400 }}>
                O SisteQ não nasceu como software genérico. <strong style={{ color: "#0B1F4B", fontWeight: 600 }}>Foi criado a partir da experiência real com implantação e manutenção de sistemas de gestão ISO 14001</strong> — por quem entende o dia a dia da gestão ambiental.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
