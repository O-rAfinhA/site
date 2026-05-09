import { FileText, CheckSquare, AlertTriangle, Beaker, FolderOpen, Clipboard, Calendar, ClipboardList } from "lucide-react";

const technicalResources = [
  {
    icon: FileText,
    title: "RDO",
    desc: "Registro Diário de Obra com atividades, condições climáticas, mão de obra e ocorrências",
    color: "#B45A1C",
    bg: "rgba(180,90,28,0.08)",
  },
  {
    icon: CheckSquare,
    title: "FVS",
    desc: "Ficha de Verificação de Serviço com critérios de aceitação e aprovação",
    color: "#D97706",
    bg: "rgba(217,119,6,0.08)",
  },
  {
    icon: ClipboardList,
    title: "PES",
    desc: "Procedimento de Execução de Serviço",
    color: "#10B981",
    bg: "rgba(16,185,129,0.08)",
  },
  {
    icon: AlertTriangle,
    title: "ROO",
    desc: "Relatório de Ocorrências com rastreabilidade",
    color: "#DC2626",
    bg: "rgba(220,38,38,0.08)",
  },
  {
    icon: Beaker,
    title: "PCTO",
    desc: "Plano de Controle Tecnológico",
    color: "#7C3AED",
    bg: "rgba(124,58,237,0.08)",
  },
  {
    icon: FolderOpen,
    title: "PDE",
    desc: "Perfil de Desempenho de Edificações",
    color: "#0891B2",
    bg: "rgba(8,145,178,0.08)",
  },
  {
    icon: Clipboard,
    title: "PQO",
    desc: "Plano de Qualidade da Obra",
    color: "#059669",
    bg: "rgba(5,150,105,0.08)",
  },
  {
    icon: Calendar,
    title: "Cronograma",
    desc: "Integrado ao restante da gestão",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.08)",
  },
];

export function TechnicalDifferentialPBQPH() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
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
            Diferencial Técnico
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
            A maioria dos sistemas da qualidade não foi feito para obra. O SisteQ foi.
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#64748B",
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            Construtoras precisam de mais do que documentos e auditorias. Precisam de Diário de Obra,
            FVS, controle tecnológico e cronograma físico, tudo conectado à gestão da qualidade.
          </p>
        </div>

        {/* Technical resources grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
          {technicalResources.map((resource) => {
            const Icon = resource.icon;
            return (
              <div
                key={resource.title}
                className="p-6 rounded-xl border transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
                style={{
                  backgroundColor: "#FAFAFA",
                  borderColor: "rgba(180,90,28,0.1)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: resource.bg }}
                >
                  <Icon size={20} style={{ color: resource.color }} strokeWidth={2} />
                </div>
                <h3
                  className="mb-2"
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#0B1F4B",
                    lineHeight: 1.3,
                  }}
                >
                  {resource.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#64748B",
                    lineHeight: 1.5,
                    fontWeight: 400,
                  }}
                >
                  {resource.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
