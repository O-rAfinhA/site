import { AlertTriangle, FileX, Layers, FileSearch } from "lucide-react";

const pains = [
  {
    icon: Layers,
    title: "Já é certificada, mas ainda controla RDO e FVS em planilha",
    desc: "Obras, diários, fichas de verificação e controles técnicos funcionam em ferramentas separadas, sem integração real.",
  },
  {
    icon: FileX,
    title: "Quer certificar, mas não quer improvisar na implantação",
    desc: "Precisa de estrutura clara desde o início, não de documentos soltos que dificultam o acompanhamento das obras depois.",
  },
  {
    icon: FileSearch,
    title: "Tem obras, RDO, FVS e controles, mas tudo espalhado",
    desc: "Cada obra usa seu próprio controle e fica difícil acompanhar o que está pendente, aprovado ou em conformidade.",
  },
  {
    icon: AlertTriangle,
    title: "Sente que a gestão existe, mas não está integrada",
    desc: "Os requisitos do PBQP-H são atendidos, mas a operação das obras e o controle técnico não conversam entre si.",
  },
];

export function PainPointsPBQPH() {
  return (
    <section id="realidade" className="py-24 lg:py-32" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p
            className="mb-4"
            style={{ color: "#B45A1C", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}
          >
            Você não está sozinho
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 700,
              color: "#0B1F4B",
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
            }}
          >
            A maioria das construtoras vive ao menos uma dessas situações com o PBQP-H:
          </h2>
        </div>

        {/* Pain cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {pains.map((pain, i) => {
            const Icon = pain.icon;
            return (
              <div
                key={i}
                className="group p-6 rounded-xl border transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: "#FAFAFA",
                  borderColor: "rgba(180,90,28,0.12)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                  style={{ backgroundColor: "rgba(180,90,28,0.1)" }}
                >
                  <Icon size={20} style={{ color: "#B45A1C" }} strokeWidth={2} />
                </div>
                <h3
                  className="mb-3"
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#0B1F4B",
                    lineHeight: 1.4,
                  }}
                >
                  {pain.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "#64748B", lineHeight: 1.7, fontWeight: 400 }}>
                  {pain.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p style={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.7, fontWeight: 400 }}>
            O SisteQ foi criado para resolver exatamente isso: <strong style={{ color: "#0B1F4B", fontWeight: 600 }}>organizar o PBQP-H de forma integrada, prática e aderente ao que o programa pede</strong> — do início da certificação até a manutenção contínua.
          </p>
        </div>
      </div>
    </section>
  );
}
