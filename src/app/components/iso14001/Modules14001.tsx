import {
  Target,
  Leaf,
  ShieldCheck,
  Trash2,
  AlertTriangle,
  Users,
} from "lucide-react";

const blocks = [
  {
    icon: Target,
    title: "Política e estratégia ambiental",
    desc: "Estruture a direção estratégica da sua gestão ambiental com política clara, objetivos mensuráveis e análise crítica estruturada.",
    color: "#059669",
    accent: "rgba(5,150,105,0.07)",
    borderAccent: "rgba(5,150,105,0.18)",
    items: [
      { label: "Política Ambiental", highlight: true },
      { label: "Objetivos Ambientais", highlight: true },
      { label: "Metas", highlight: false },
      { label: "SWOT", highlight: false },
      { label: "Análise Crítica", highlight: false },
      { label: "Indicadores Estratégicos", highlight: false },
    ],
  },
  {
    icon: Leaf,
    title: "Aspectos e impactos",
    desc: "Identifique, avalie e controle os aspectos ambientais significativos da sua operação com estrutura completa e rastreável.",
    color: "#10B981",
    accent: "rgba(16,185,129,0.07)",
    borderAccent: "rgba(16,185,129,0.18)",
    items: [
      { label: "Levantamento de Aspectos", highlight: true },
      { label: "Avaliação de Significância", highlight: true },
      { label: "Controles Operacionais", highlight: false },
      { label: "Ciclo de Vida", highlight: false },
      { label: "Monitoramento Ambiental", highlight: false },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Requisitos legais e licenciamento",
    desc: "Mantenha o controle sobre legislação aplicável, licenças e prazos com monitoramento estruturado e evidências organizadas.",
    color: "#D97706",
    accent: "rgba(217,119,6,0.07)",
    borderAccent: "rgba(217,119,6,0.18)",
    items: [
      { label: "Requisitos Legais", highlight: true },
      { label: "Licenças", highlight: true },
      { label: "Certidões", highlight: false },
      { label: "Monitoramento de Prazos", highlight: false },
      { label: "Avaliação de Conformidade", highlight: false },
      { label: "Evidências para Auditoria", highlight: false },
    ],
  },
  {
    icon: AlertTriangle,
    title: "Auditorias, NCs e ações",
    desc: "Programe, execute e acompanhe auditorias internas, não conformidades e ações corretivas com histórico completo e auditoria instantânea.",
    color: "#DC2626",
    accent: "rgba(220,38,38,0.07)",
    borderAccent: "rgba(220,38,38,0.18)",
    items: [
      { label: "Programa Anual", highlight: true },
      { label: "Execução", highlight: false },
      { label: "Auditores", highlight: false },
      { label: "Histórico de NCs", highlight: false },
      { label: "Ações Corretivas", highlight: false },
      { label: "Plano de Ação", highlight: false },
      { label: "Auditoria Instantânea", highlight: true },
    ],
  },
  {
    icon: Trash2,
    title: "Resíduos, recursos e emergências",
    desc: "Gerencie resíduos, controle consumo de recursos e prepare a organização para emergências ambientais com planos e simulados.",
    color: "#7C3AED",
    accent: "rgba(124,58,237,0.07)",
    borderAccent: "rgba(124,58,237,0.18)",
    items: [
      { label: "PGRS", highlight: true },
      { label: "Destinação de Resíduos", highlight: true },
      { label: "Consumo de Recursos", highlight: false },
      { label: "Emergências", highlight: false },
      { label: "Simulados", highlight: false },
      { label: "Riscos Ambientais", highlight: false },
    ],
  },
  {
    icon: Users,
    title: "Pessoas, treinamentos e fornecedores",
    desc: "Mantenha colaboradores qualificados, treinamentos estruturados e fornecedores homologados com matriz de competências e avaliações.",
    color: "#0891B2",
    accent: "rgba(8,145,178,0.07)",
    borderAccent: "rgba(8,145,178,0.18)",
    items: [
      { label: "Colaboradores", highlight: true },
      { label: "Matriz de Qualificação", highlight: false },
      { label: "Treinamentos Ambientais", highlight: false },
      { label: "Comunicação", highlight: false },
      { label: "Homologação de Fornecedores", highlight: true },
      { label: "Avaliação", highlight: false },
      { label: "ROF", highlight: false },
    ],
  },
];

export function Modules14001() {
  return (
    <section id="solucao" className="py-24 lg:py-32" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
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
            Abrangência completa
          </p>
          <h2
            style={{
              fontSize: "clamp(1.85rem, 3.2vw, 2.7rem)",
              fontWeight: 700,
              color: "#0B1F4B",
              lineHeight: 1.2,
              letterSpacing: "-0.025em",
              marginBottom: "1.25rem",
            }}
          >
            Tudo o que sua ISO 14001 precisa ter sob controle
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#64748B",
              lineHeight: 1.7,
              fontWeight: 400,
              maxWidth: "660px",
              margin: "0 auto",
            }}
          >
            O SisteQ organiza as principais frentes da ISO 14001 em uma estrutura conectada, para que sua empresa tenha clareza da gestão ambiental, da operação e da melhoria contínua.
          </p>
        </div>

        {/* Top row: 3 cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-7 mb-6 lg:mb-7">
          {blocks.slice(0, 3).map((block) => (
            <BlockCard key={block.title} block={block} />
          ))}
        </div>

        {/* Bottom row: 3 cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-7">
          {blocks.slice(3).map((block) => (
            <BlockCard key={block.title} block={block} />
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-16 lg:mt-20 max-w-3xl mx-auto text-center">
          <div
            className="px-8 py-7 rounded-2xl border"
            style={{
              backgroundColor: "rgba(5,150,105,0.03)",
              borderColor: "rgba(5,150,105,0.1)",
            }}
          >
            <p style={{ fontSize: "1.05rem", color: "#0B1F4B", lineHeight: 1.7, fontWeight: 500 }}>
              Da política à operação, da legislação à ação, dos aspectos à evidência:
            </p>
            <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.7, fontWeight: 400, marginTop: "0.5rem" }}>
              o SisteQ organiza a ISO 14001 em uma estrutura completa e conectada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Individual block card ── */
function BlockCard({ block }: { block: (typeof blocks)[number] }) {
  const Icon = block.icon;
  return (
    <div
      className="group rounded-2xl border p-7 lg:p-9 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
      style={{
        backgroundColor: "#FAFBFC",
        borderColor: block.borderAccent,
      }}
    >
      {/* Icon + Title */}
      <div className="flex items-start gap-4 mb-5">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: block.accent }}
        >
          <Icon size={20} style={{ color: block.color }} strokeWidth={2} />
        </div>
        <h3
          className="pt-1.5"
          style={{
            fontSize: "1.08rem",
            fontWeight: 700,
            color: "#0B1F4B",
            lineHeight: 1.35,
          }}
        >
          {block.title}
        </h3>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: "0.875rem",
          color: "#64748B",
          lineHeight: 1.7,
          fontWeight: 400,
          marginBottom: "1.4rem",
        }}
      >
        {block.desc}
      </p>

      {/* Items */}
      <div className="flex flex-wrap gap-2">
        {block.items.map((item) => (
          <span
            key={item.label}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
            style={{
              backgroundColor: item.highlight ? block.accent : "rgba(0,0,0,0.025)",
              border: `1px solid ${item.highlight ? block.color + "28" : "rgba(0,0,0,0.06)"}`,
              fontSize: "0.79rem",
              fontWeight: item.highlight ? 600 : 500,
              color: item.highlight ? block.color : "#475569",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{
                backgroundColor: item.highlight ? block.color : "#94A3B8",
                opacity: item.highlight ? 0.8 : 0.5,
              }}
            />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
