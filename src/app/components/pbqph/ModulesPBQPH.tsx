import {
  Building2,
  FileText,
  ClipboardCheck,
  Wrench,
  AlertTriangle,
  Users,
  FolderOpen,
} from "lucide-react";

const blocks = [
  {
    icon: Building2,
    title: "Gestão da obra",
    desc: "Estruture e acompanhe cada obra com cadastro completo, cronograma físico, equipes e indicadores específicos por empreendimento.",
    color: "#B45A1C",
    accent: "rgba(180,90,28,0.07)",
    borderAccent: "rgba(180,90,28,0.18)",
    items: [
      { label: "Cadastro de Obras", highlight: true },
      { label: "Cronograma Físico", highlight: true },
      { label: "Equipes", highlight: false },
      { label: "Etapas", highlight: false },
      { label: "Indicadores por Obra", highlight: false },
      { label: "App Diário de Obra", highlight: false },
      { label: "App Ocorrências", highlight: false },
    ],
  },
  {
    icon: FileText,
    title: "RDO e FVS",
    desc: "Registre diariamente as atividades da obra e verifique serviços executados com aprovações, evidências e rastreabilidade completa.",
    color: "#D97706",
    accent: "rgba(217,119,6,0.07)",
    borderAccent: "rgba(217,119,6,0.18)",
    items: [
      { label: "RDO (Diário de Obra)", highlight: true },
      { label: "FVS (Verificação de Serviços)", highlight: true },
      { label: "Aprovações", highlight: false },
      { label: "Vinculação a Serviços e Fornecedores", highlight: false },
      { label: "Evidências", highlight: false },
    ],
  },
  {
    icon: Wrench,
    title: "Controle tecnológico",
    desc: "Gerencie o plano de controle tecnológico com ensaios, materiais, resultados e histórico de conformidade técnica da obra.",
    color: "#7C3AED",
    accent: "rgba(124,58,237,0.07)",
    borderAccent: "rgba(124,58,237,0.18)",
    items: [
      { label: "PCTO (Plano de Controle Tecnológico)", highlight: true },
      { label: "Ensaios", highlight: true },
      { label: "Materiais", highlight: false },
      { label: "Resultados", highlight: false },
      { label: "Histórico", highlight: false },
      { label: "Conformidade Técnica", highlight: false },
    ],
  },
  {
    icon: ClipboardCheck,
    title: "PDE, PQO e ROO",
    desc: "Mantenha o controle sobre desempenho, qualidade e ocorrências de obra com não conformidades e ações corretivas estruturadas.",
    color: "#059669",
    accent: "rgba(5,150,105,0.07)",
    borderAccent: "rgba(5,150,105,0.18)",
    items: [
      { label: "PDE (Desempenho da Edificação)", highlight: true },
      { label: "PQO (Qualidade da Obra)", highlight: true },
      { label: "ROO (Ocorrências)", highlight: false },
      { label: "Não Conformidades em Obra", highlight: false },
      { label: "Ações Corretivas", highlight: false },
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
      { label: "Funções", highlight: false },
      { label: "Matriz de Qualificação", highlight: false },
      { label: "Treinamentos", highlight: false },
      { label: "Homologação de Fornecedores", highlight: true },
      { label: "Avaliação", highlight: false },
      { label: "Ocorrências", highlight: false },
    ],
  },
  {
    icon: FolderOpen,
    title: "Auditorias, documentos e melhoria",
    desc: "Organize documentos internos e externos, licenças, programa de auditorias e acompanhe não conformidades com auditoria instantânea.",
    color: "#DC2626",
    accent: "rgba(220,38,38,0.07)",
    borderAccent: "rgba(220,38,38,0.18)",
    items: [
      { label: "Documentos Internos", highlight: true },
      { label: "Externos", highlight: false },
      { label: "Licenças", highlight: false },
      { label: "Certidões", highlight: false },
      { label: "Programa de Auditorias", highlight: false },
      { label: "Histórico de NCs", highlight: false },
      { label: "Plano de Ação", highlight: false },
      { label: "Auditoria Instantânea", highlight: true },
    ],
  },
];

export function ModulesPBQPH() {
  return (
    <section id="solucao" className="py-24 lg:py-32" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <p
            className="mb-4"
            style={{
              color: "#B45A1C",
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
            Tudo o que seu PBQP-H precisa ter sob controle
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
            O SisteQ organiza as principais frentes do PBQP-H em uma estrutura conectada, para que sua construtora tenha clareza da gestão de obras, da operação e da melhoria contínua.
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
              backgroundColor: "rgba(180,90,28,0.03)",
              borderColor: "rgba(180,90,28,0.1)",
            }}
          >
            <p style={{ fontSize: "1.05rem", color: "#0B1F4B", lineHeight: 1.7, fontWeight: 500 }}>
              Da obra à entrega, do RDO à aprovação, do controle à evidência.
            </p>
            <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.7, fontWeight: 400, marginTop: "0.5rem" }}>
              o SisteQ organiza o PBQP-H em uma estrutura completa e conectada.
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
