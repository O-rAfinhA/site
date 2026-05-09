import { Eye, CheckSquare, Zap, AlertTriangle } from "lucide-react";

export function InstantAudit() {
  const valuePoints = [
    {
      icon: Eye,
      title: "Pendências visíveis em tempo real",
      desc: "Sem precisar montar relatório manual.",
      color: "#60A5FA",
    },
    {
      icon: CheckSquare,
      title: "Status real da gestão",
      desc: "Você sabe o que foi feito, o que atrasou e o que não saiu do papel.",
      color: "#10B981",
    },
    {
      icon: Zap,
      title: "Antecipa o que a auditoria vai cobrar",
      desc: "Corrige antes, não depois.",
      color: "#F59E0B",
    },
  ];

  return (
    <section
      id="auditoria"
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ backgroundColor: "#0B1F4B" }}
    >
      {/* BG decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ backgroundColor: "#60A5FA", filter: "blur(120px)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-8"
          style={{ backgroundColor: "#F59E0B", filter: "blur(100px)" }}
        />
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]">
          <defs>
            <pattern id="iag" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth=".5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#iag)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          {/* Left — Content */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 border border-orange-400/25"
              style={{ backgroundColor: "rgba(245,158,11,0.15)" }}
            >
              <Zap size={14} className="text-orange-400" />
              <span
                className="text-orange-300"
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Conceito Exclusivo
              </span>
            </div>

            <h2
              className="text-white mb-5"
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
              }}
            >
              Auditoria Instantânea
            </h2>

            <p
              className="text-white/70 mb-6"
              style={{
                fontSize: "1.15rem",
                fontWeight: 500,
                lineHeight: 1.6,
                maxWidth: "520px",
              }}
            >
              Você não precisa esperar a próxima auditoria para descobrir o que não está funcionando.
            </p>

            <p
              className="text-white/55 mb-10"
              style={{
                fontSize: "1rem",
                fontWeight: 400,
                lineHeight: 1.75,
                maxWidth: "520px",
              }}
            >
              Um painel que mostra em tempo real as pendências, atrasos e tarefas não executadas em todos os módulos da plataforma. Você vê o estado real da gestão antes de qualquer auditoria interna ou de certificação.
            </p>

            {/* Value points */}
            <div className="space-y-4 mb-10">
              {valuePoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.title} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${point.color}15` }}
                    >
                      <Icon size={18} style={{ color: point.color }} strokeWidth={2} />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          color: "#FFFFFF",
                          lineHeight: 1.3,
                          marginBottom: "2px",
                        }}
                      >
                        {point.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          color: "rgba(255,255,255,0.45)",
                          lineHeight: 1.5,
                          fontWeight: 400,
                        }}
                      >
                        {point.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Closing statement */}
            <div
              className="rounded-xl px-6 py-4"
              style={{
                backgroundColor: "rgba(245,158,11,0.08)",
                borderLeft: "3px solid #F59E0B",
              }}
            >
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "#FCD34D",
                  fontWeight: 600,
                  lineHeight: 1.5,
                }}
              >
                Você não descobre o problema na auditoria. Você descobre antes.
              </p>
            </div>
          </div>

          {/* Right — Mockup */}
          <div className="hidden lg:block">
            <InstantAuditMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Instant Audit Mockup ── */
function InstantAuditMockup() {
  const modules = [
    { name: "Ações Corretivas", pending: 3, status: "warning", color: "#F59E0B" },
    { name: "Auditorias", pending: 0, status: "ok", color: "#10B981" },
    { name: "Documentos", pending: 7, status: "alert", color: "#EF4444" },
    { name: "Indicadores", pending: 1, status: "warning", color: "#F59E0B" },
    { name: "Calibração", pending: 2, status: "warning", color: "#F59E0B" },
    { name: "Treinamentos", pending: 0, status: "ok", color: "#10B981" },
  ];

  return (
    <div className="relative">
      <div
        className="absolute -inset-4 rounded-2xl opacity-20"
        style={{ backgroundColor: "#60A5FA", filter: "blur(50px)" }}
      />
      <div
        className="relative rounded-2xl overflow-hidden border border-white/10"
        style={{ backgroundColor: "#0F2968", boxShadow: "0 40px 80px rgba(0,0,0,0.6)" }}
      >
        {/* Window bar */}
        <div
          className="flex items-center justify-between px-5 py-3 border-b border-white/10"
          style={{ backgroundColor: "#0B1F4B" }}
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#EF4444" }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#F59E0B" }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#10B981" }} />
          </div>
          <span className="text-white/40 text-xs">Auditoria Instantânea</span>
          <div className="w-16" />
        </div>

        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-white text-sm mb-1" style={{ fontWeight: 600 }}>
                Status da Gestão
              </h3>
              <p className="text-white/40 text-xs" style={{ fontWeight: 400 }}>
                Atualizado em tempo real
              </p>
            </div>
            <div
              className="px-3 py-1.5 rounded-lg"
              style={{ backgroundColor: "rgba(239,68,68,0.15)" }}
            >
              <span className="text-red-400 text-xs" style={{ fontWeight: 600 }}>
                13 pendências
              </span>
            </div>
          </div>

          {/* Module list */}
          <div className="space-y-3">
            {modules.map((module) => (
              <div
                key={module.name}
                className="flex items-center justify-between rounded-lg px-4 py-3 border border-white/5"
                style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: module.color }}
                  />
                  <span
                    style={{
                      fontSize: "0.82rem",
                      color: "rgba(255,255,255,0.75)",
                      fontWeight: 500,
                    }}
                  >
                    {module.name}
                  </span>
                </div>
                {module.pending > 0 ? (
                  <span
                    className="px-2 py-1 rounded"
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      color: module.color,
                      backgroundColor: `${module.color}15`,
                    }}
                  >
                    {module.pending} {module.pending === 1 ? "pendência" : "pendências"}
                  </span>
                ) : (
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 500,
                      color: "#10B981",
                    }}
                  >
                    Em dia
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Action button */}
          <div className="mt-5 pt-5 border-t border-white/10">
            <button
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#F59E0B", fontWeight: 600, fontSize: "0.85rem" }}
            >
              <AlertTriangle size={14} />
              Ver detalhes das pendências
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
