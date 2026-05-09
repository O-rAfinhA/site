import { Lock, MousePointer2, LayoutDashboard } from "lucide-react";

const pillars = [
  {
    icon: Lock,
    title: "Alto Controle",
    subtitle: "Rastreabilidade de ponta a ponta",
    color: "#004BA8",
    bg: "rgba(0,75,168,0.08)",
    border: "rgba(0,75,168,0.18)",
    items: [
      "Cada ação tem origem rastreável — risco, NC ou indicador",
      "Histórico completo de todas as revisões e aprovações",
      "Evidências organizadas e disponíveis para auditoria a qualquer momento",
      "Integração entre módulos elimina lacunas de informação",
    ],
    metric: { value: "100%", label: "Rastreabilidade garantida" },
  },
  {
    icon: MousePointer2,
    title: "Fácil e Intuitivo",
    subtitle: "Projetado para o gestor, não para o TI",
    color: "#059669",
    bg: "rgba(5,150,105,0.08)",
    border: "rgba(5,150,105,0.18)",
    items: [
      "Interface limpa, sem excesso de cliques ou telas complexas",
      "Navegação guiada pelo fluxo natural da gestão da qualidade",
      "Onboarding rápido — equipes operando em dias, não meses",
      "Acesso por qualquer dispositivo, sem instalação local",
    ],
    metric: { value: "30 dias", label: "Para estar operacional" },
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards Ricos",
    subtitle: "Números que orientam decisões reais",
    color: "#D97706",
    bg: "rgba(217,119,6,0.08)",
    border: "rgba(217,119,6,0.18)",
    items: [
      "KPIs estratégicos e operacionais consolidados em tempo real",
      "Matriz de riscos com visualização por probabilidade e impacto",
      "Painel de análise crítica com todos os dados em um único lugar",
      "Relatórios automáticos para reuniões de direção",
    ],
    metric: { value: "360°", label: "Visão da gestão da qualidade" },
  },
];

export function Pillars() {
  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: "#0B1F4B" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ backgroundColor: "#004BA8", filter: "blur(100px)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5"
          style={{ backgroundColor: "#60A5FA", filter: "blur(80px)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p
            className="mb-4"
            style={{
              color: "#60A5FA",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Por que o SisteQ
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
            }}
          >
            Três pilares que fazem a diferença no dia a dia.
          </h2>
        </div>

        {/* Pillars grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="rounded-2xl p-7 flex flex-col border"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  borderColor: pillar.border,
                }}
              >
                {/* Icon + title */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: pillar.bg, border: `1px solid ${pillar.border}` }}
                  >
                    <Icon size={20} style={{ color: pillar.color }} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        lineHeight: 1.2,
                      }}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: pillar.color,
                        fontWeight: 500,
                        marginTop: "2px",
                      }}
                    >
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>

                {/* Separator */}
                <div
                  className="w-full h-px mb-5"
                  style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                />

                {/* Items */}
                <ul className="space-y-3 flex-1">
                  {pillar.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: pillar.bg }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: pillar.color }}
                        />
                      </div>
                      <span
                        style={{
                          fontSize: "0.825rem",
                          color: "rgba(255,255,255,0.65)",
                          lineHeight: 1.6,
                          fontWeight: 400,
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Metric highlight */}
                <div
                  className="mt-6 p-4 rounded-xl"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                >
                  <div
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: 800,
                      color: pillar.color,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.1,
                    }}
                  >
                    {pillar.metric.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.775rem",
                      color: "rgba(255,255,255,0.45)",
                      marginTop: "3px",
                      fontWeight: 400,
                    }}
                  >
                    {pillar.metric.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}