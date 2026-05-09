import { Check, Building2, Target, TrendingUp, FileCheck } from "lucide-react";

const profiles = [
  {
    icon: Target,
    title: "Empresas buscando certificação ISO 9001",
    desc: "Precisa implantar o sistema de gestão de forma estruturada, sem improvisação e com base sólida para a manutenção futura.",
  },
  {
    icon: FileCheck,
    title: "Empresas já certificadas que querem organizar melhor o sistema",
    desc: "Já tem o certificado, mas sente que a gestão poderia ser mais integrada, clara e menos dependente de planilhas.",
  },
  {
    icon: TrendingUp,
    title: "Empresas com crescimento e maior complexidade interna",
    desc: "A operação cresceu, os processos ficaram mais complexos e o controle informal não funciona mais como antes.",
  },
  {
    icon: Building2,
    title: "Empresas que querem mais controle antes das auditorias",
    desc: "Busca ter evidências organizadas, rastreabilidade clara e visão completa do sistema de gestão a qualquer momento.",
  },
];

const roles = [
  "Gerente da Qualidade",
  "Coordenador de SGQ",
  "Diretor de Operações",
  "Gerente de Processos",
  "Analista de Qualidade",
  "Consultor ISO 9001",
];

export function ForWhom() {
  return (
    <section id="para-quem" className="py-24 lg:py-32" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p
            className="mb-4"
            style={{
              color: "#004BA8",
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
                  className="flex gap-4 p-6 rounded-xl border transition-all duration-200 hover:shadow-md hover:border-blue-200"
                  style={{
                    backgroundColor: "#FAFBFC",
                    borderColor: "rgba(0,75,168,0.08)",
                  }}
                >
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "rgba(0,75,168,0.1)" }}
                  >
                    <Icon size={20} style={{ color: "#004BA8" }} strokeWidth={2} />
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
                backgroundColor: "rgba(0,75,168,0.04)",
                borderColor: "rgba(0,75,168,0.12)",
              }}
            >
              <div className="flex gap-3 mb-4">
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#004BA8" }}
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
                    O SisteQ acompanha sua empresa desde a estruturação inicial até a operação consolidada do sistema de gestão da qualidade.
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