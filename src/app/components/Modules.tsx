import {
  Compass,
  Layers,
  ShieldCheck,
  Users,
  Wrench,
  FileText,
} from "lucide-react";

const blocks = [
  {
    icon: Compass,
    title: "Direção e estratégia",
    desc: "Estruture o núcleo estratégico da gestão com direcionamento claro, análise de contexto, objetivos mensuráveis e análise crítica estruturada.",
    color: "#004BA8",
    accent: "rgba(0,75,168,0.07)",
    borderAccent: "rgba(0,75,168,0.18)",
    items: [
      { label: "Direcionamento Estratégico", highlight: true },
      { label: "Cenário Organizacional", highlight: false },
      { label: "Partes Interessadas", highlight: false },
      { label: "SWOT", highlight: false },
      { label: "Objetivos da Qualidade", highlight: true },
      { label: "Plano de Ação Estratégico", highlight: false },
      { label: "Análise Crítica", highlight: false },
    ],
  },
  {
    icon: Layers,
    title: "Processos",
    desc: "Organize o mapa de processos, interações, matriz completa e acompanhe indicadores específicos com relatórios estruturados.",
    color: "#0891B2",
    accent: "rgba(8,145,178,0.07)",
    borderAccent: "rgba(8,145,178,0.18)",
    items: [
      { label: "Mapa de Processos", highlight: true },
      { label: "Interação de Processos", highlight: true },
      { label: "Matriz de Interação", highlight: false },
      { label: "Indicadores por Processo", highlight: false },
      { label: "Relatórios", highlight: false },
    ],
  },
  {
    icon: FileText,
    title: "Documentos e registros",
    desc: "Centralize documentos internos e externos, licenças, certidões, registros e modelos com controle de tipos e rastreabilidade completa.",
    color: "#7C3AED",
    accent: "rgba(124,58,237,0.07)",
    borderAccent: "rgba(124,58,237,0.18)",
    items: [
      { label: "Internos", highlight: true },
      { label: "Externos", highlight: false },
      { label: "Clientes", highlight: false },
      { label: "PES", highlight: false },
      { label: "Licenças", highlight: false },
      { label: "Certidões", highlight: false },
      { label: "Registros", highlight: true },
      { label: "Biblioteca de Modelos", highlight: false },
      { label: "Controle de Tipos", highlight: false },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Auditorias, NCs e ações",
    desc: "Programe, execute e acompanhe auditorias internas, não conformidades e ações com histórico completo e auditoria instantânea.",
    color: "#D97706",
    accent: "rgba(217,119,6,0.07)",
    borderAccent: "rgba(217,119,6,0.18)",
    items: [
      { label: "Programa Anual", highlight: true },
      { label: "Execução de Auditorias", highlight: false },
      { label: "Auditores", highlight: false },
      { label: "Histórico de NCs", highlight: false },
      { label: "Ações Corretivas", highlight: false },
      { label: "Plano de Ação", highlight: false },
      { label: "Tarefas", highlight: false },
      { label: "Auditoria Instantânea", highlight: true },
    ],
  },
  {
    icon: Users,
    title: "Pessoas, competências e fornecedores",
    desc: "Mantenha colaboradores qualificados com matriz de competências, treinamentos estruturados e fornecedores homologados com avaliação completa.",
    color: "#DC2626",
    accent: "rgba(220,38,38,0.07)",
    borderAccent: "rgba(220,38,38,0.18)",
    items: [
      { label: "Descrição de Funções", highlight: true },
      { label: "Matriz e Plano de Qualificação", highlight: true },
      { label: "Treinamentos", highlight: false },
      { label: "Comunicação", highlight: false },
      { label: "Homologação de Fornecedores", highlight: true },
      { label: "Ranking de Fornecedores", highlight: false },
      { label: "Ocorrências", highlight: false },
      { label: "Recebimento", highlight: false },
    ],
  },
  {
    icon: Wrench,
    title: "Equipamentos, calibração e manutenção",
    desc: "Gerencie instrumentos de medição, calibração, plano preventivo de manutenção e ordens de serviço com histórico completo.",
    color: "#059669",
    accent: "rgba(5,150,105,0.07)",
    borderAccent: "rgba(5,150,105,0.18)",
    items: [
      { label: "Instrumentos de Medição", highlight: true },
      { label: "Calibração", highlight: true },
      { label: "Equipamentos", highlight: false },
      { label: "Plano Preventivo", highlight: false },
      { label: "Agenda", highlight: false },
      { label: "Ordens de Serviço", highlight: false },
      { label: "Corretivas", highlight: false },
      { label: "Histórico", highlight: false },
    ],
  },
];

export function Modules() {
  return (
    <section id="solucao" className="py-24 lg:py-32" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <p
            className="mb-4"
            style={{
              color: "#004BA8",
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
            Tudo o que sua ISO 9001 precisa ter sob controle
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
            O SisteQ organiza as principais frentes da ISO 9001 em uma estrutura conectada, para que sua empresa tenha clareza da gestão, da operação e da melhoria contínua.
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
              backgroundColor: "rgba(0,75,168,0.03)",
              borderColor: "rgba(0,75,168,0.1)",
            }}
          >
            <p style={{ fontSize: "1.05rem", color: "#0B1F4B", lineHeight: 1.7, fontWeight: 500 }}>
              Da direção à operação, da auditoria à ação, da competência à evidência.
            </p>
            <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.7, fontWeight: 400, marginTop: "0.5rem" }}>
              o SisteQ organiza a ISO 9001 em uma estrutura completa e conectada.
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
