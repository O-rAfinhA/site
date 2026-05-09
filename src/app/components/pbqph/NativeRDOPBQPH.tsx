import { BookOpen, Link2, Users, FileText } from "lucide-react";

export function NativeRDOPBQPH() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">
          {/* Left — Content */}
          <div>
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
              Recurso Nativo
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
              Diário de Obra como recurso nativo
            </h2>
            <p
              className="mb-8"
              style={{
                fontSize: "1.05rem",
                color: "#64748B",
                lineHeight: 1.7,
                fontWeight: 400,
              }}
            >
              Não é planilha vinculada. Não é integração com sistema externo. É um módulo nativo
              da plataforma, conectado à qualidade, à equipe e aos documentos da obra.
            </p>

            {/* Connection points */}
            <div className="space-y-4">
              {[
                { icon: Link2, text: "Conectado aos planos de ação e não conformidades" },
                { icon: Users, text: "Vinculado à equipe e responsáveis da obra" },
                { icon: FileText, text: "Rastreável em auditorias e análise crítica" },
              ].map((point, i) => {
                const Icon = point.icon;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(180,90,28,0.08)" }}
                    >
                      <Icon size={18} style={{ color: "#B45A1C" }} strokeWidth={2} />
                    </div>
                    <span
                      style={{
                        fontSize: "0.95rem",
                        color: "#475569",
                        fontWeight: 500,
                        lineHeight: 1.4,
                      }}
                    >
                      {point.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — Mockup placeholder */}
          <div className="hidden lg:block">
            <RDOMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── RDO Mockup ── */
function RDOMockup() {
  return (
    <div className="relative">
      <div
        className="absolute -inset-4 rounded-2xl opacity-15"
        style={{ backgroundColor: "#B45A1C", filter: "blur(40px)" }}
      />
      <div
        className="relative rounded-2xl overflow-hidden border"
        style={{
          backgroundColor: "#FFFFFF",
          borderColor: "rgba(180,90,28,0.15)",
          boxShadow: "0 20px 60px rgba(180,90,28,0.15)",
        }}
      >
        {/* Header */}
        <div
          className="px-6 py-4 border-b"
          style={{
            backgroundColor: "#B45A1C",
            borderColor: "rgba(255,255,255,0.1)",
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen size={20} className="text-white" strokeWidth={2} />
              <span className="text-white" style={{ fontSize: "0.95rem", fontWeight: 600 }}>
                Diário de Obra · RDO #247
              </span>
            </div>
            <span
              className="px-3 py-1 rounded-full text-xs"
              style={{
                backgroundColor: "rgba(255,255,255,0.2)",
                color: "#FFFFFF",
                fontWeight: 500,
              }}
            >
              Obra Residencial Ômega
            </span>
          </div>
        </div>

        <div className="p-6">
          {/* Info grid */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div>
              <div className="text-xs mb-1" style={{ color: "#94A3B8", fontWeight: 500 }}>
                Data
              </div>
              <div style={{ fontSize: "0.9rem", color: "#0B1F4B", fontWeight: 600 }}>
                27/04/2026
              </div>
            </div>
            <div>
              <div className="text-xs mb-1" style={{ color: "#94A3B8", fontWeight: 500 }}>
                Condições climáticas
              </div>
              <div style={{ fontSize: "0.9rem", color: "#0B1F4B", fontWeight: 600 }}>
                Sol · 24°C
              </div>
            </div>
            <div>
              <div className="text-xs mb-1" style={{ color: "#94A3B8", fontWeight: 500 }}>
                Responsável técnico
              </div>
              <div style={{ fontSize: "0.9rem", color: "#0B1F4B", fontWeight: 600 }}>
                Eng. Carlos Mendes
              </div>
            </div>
            <div>
              <div className="text-xs mb-1" style={{ color: "#94A3B8", fontWeight: 500 }}>
                Efetivo no dia
              </div>
              <div style={{ fontSize: "0.9rem", color: "#0B1F4B", fontWeight: 600 }}>
                18 colaboradores
              </div>
            </div>
          </div>

          {/* Activities */}
          <div className="mb-5">
            <h4
              className="mb-3"
              style={{ fontSize: "0.8rem", color: "#64748B", fontWeight: 600 }}
            >
              Atividades executadas
            </h4>
            <div className="space-y-2">
              {[
                "Concretagem da laje do 3º pavimento",
                "Instalação de tubulação elétrica",
                "Assentamento de alvenaria bloco 14",
              ].map((activity, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg"
                  style={{ backgroundColor: "#F8FAFC" }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "#B45A1C" }}
                  />
                  <span style={{ fontSize: "0.82rem", color: "#475569", fontWeight: 400 }}>
                    {activity}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Status badge */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <span style={{ fontSize: "0.8rem", color: "#64748B", fontWeight: 500 }}>
              Status do RDO
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs"
              style={{
                backgroundColor: "rgba(5,150,105,0.1)",
                color: "#059669",
                fontWeight: 600,
              }}
            >
              Aprovado
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
