import { Check, Building2, Target, TrendingUp, FileCheck } from "lucide-react";

const profiles = [
  {
    icon: Target,
    title: "Construtoras buscando certificação PBQP-H",
    desc: "Precisa implantar o sistema de gestão de obras de forma estruturada, sem improvisação e com base sólida para a manutenção futura.",
  },
  {
    icon: FileCheck,
    title: "Construtoras já certificadas que querem organizar melhor o sistema",
    desc: "Já tem o certificado, mas sente que a gestão de obras poderia ser mais integrada, clara e menos dependente de planilhas.",
  },
  {
    icon: TrendingUp,
    title: "Construtoras com crescimento e maior número de obras",
    desc: "O número de obras cresceu, a complexidade aumentou e o controle informal não funciona mais como antes.",
  },
  {
    icon: Building2,
    title: "Construtoras que querem mais controle antes das auditorias",
    desc: "Busca ter evidências organizadas, rastreabilidade clara e visão completa do sistema de gestão de obras a qualquer momento.",
  },
];

const roles = [
  "Gerente de Qualidade",
  "Coordenador de PBQP-H",
  "Diretor de Obras",
  "Engenheiro de Qualidade",
  "Analista de Obras",
  "Consultor PBQP-H",
];

export function ForWhomPBQPH() {
  return (
    <section id="para-quem" className="py-24 lg:py-32" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
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
            Para Quem É
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
            Esta solução é ideal para:
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile cards */}
          <div className="space-y-5">
            {profiles.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="flex gap-4 p-6 rounded-xl border transition-all duration-200 hover:shadow-md hover:border-orange-200"
                  style={{
                    backgroundColor: "#FAFBFC",
                    borderColor: "rgba(180,90,28,0.08)",
                  }}
                >
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "rgba(180,90,28,0.1)" }}
                  >
                    <Icon size={20} style={{ color: "#B45A1C" }} strokeWidth={2} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        color: "#0B1F4B",
                        lineHeight: 1.4,
                        marginBottom: "6px",
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "#64748B",
                        lineHeight: 1.65,
                        fontWeight: 400,
                      }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right panel */}
          <div>
            {/* Value statement */}
            <div
              className="p-7 rounded-2xl border"
              style={{
                backgroundColor: "rgba(180,90,28,0.04)",
                borderColor: "rgba(180,90,28,0.12)",
              }}
            >
              <div className="flex gap-3 mb-4">
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#B45A1C" }}
                >
                  <Check size={16} color="white" strokeWidth={3} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "#0B1F4B",
                      lineHeight: 1.4,
                      marginBottom: "6px",
                    }}
                  >
                    Solução útil para implantação e manutenção
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#64748B",
                      lineHeight: 1.65,
                      fontWeight: 400,
                    }}
                  >
                    O SisteQ acompanha sua construtora desde a estruturação inicial até a operação consolidada do sistema de gestão de obras.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
