import { ArrowRight, Leaf } from "lucide-react";
import Link from "next/link";

export function Hero14001() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ backgroundColor: "#0B1F2E" }}
    >
      {/* Background geometric decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10"
          style={{ backgroundColor: "#059669", filter: "blur(80px)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5"
          style={{ backgroundColor: "#10B981", filter: "blur(100px)" }}
        />
        {/* Grid lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid14001" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid14001)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 border border-emerald-400/30"
              style={{ backgroundColor: "rgba(5,150,105,0.15)" }}>
              <Leaf size={14} className="text-emerald-400" />
              <span
                className="text-emerald-300"
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Sistema de Gestão ISO 14001
              </span>
            </div>

            <h1
              className="text-white mb-6"
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Mantenha a ISO 14001 sob controle{" "}
              <span style={{ color: "#10B981" }}>com aspectos, legislação e evidências integrados</span>
            </h1>

            <p
              className="text-white/65 mb-10"
              style={{
                fontSize: "1.125rem",
                fontWeight: 400,
                lineHeight: 1.75,
                maxWidth: "540px",
              }}
            >
              O SisteQ ajuda empresas a estruturar e manter a ISO 14001, controlando aspectos e impactos ambientais, monitorando requisitos legais, gerenciando resíduos e centralizing evidências em um só lugar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/demonstracao"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded text-white text-sm transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#059669",
                  fontWeight: 600,
                  boxShadow: "0 8px 24px rgba(5,150,105,0.45)",
                }}
              >
                Solicitar Demonstração
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/demonstracao"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded text-white/80 text-sm border border-white/20 transition-all hover:border-white/40 hover:text-white"
                style={{ fontWeight: 500 }}
              >
                Falar com Especialista
              </Link>
            </div>
          </div>

          {/* Right: Platform mockup */}
          <div className="hidden lg:block">
            <PlatformMockup14001 />
          </div>
        </div>
      </div>
    </section>
  );
}

function PlatformMockup14001() {
  return (
    <div className="relative">
      {/* Outer glow */}
      <div
        className="absolute -inset-4 rounded-2xl opacity-20"
        style={{ backgroundColor: "#059669", filter: "blur(40px)" }}
      />

      {/* Main card */}
      <div
        className="relative rounded-2xl overflow-hidden border border-white/10"
        style={{
          backgroundColor: "#0F2D3E",
          boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
        }}
      >
        {/* Top bar */}
        <div
          className="flex items-center justify-between px-5 py-3 border-b border-white/10"
          style={{ backgroundColor: "#0B1F2E" }}
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#EF4444" }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#F59E0B" }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#10B981" }} />
          </div>
          <span className="text-white/40 text-xs">SisteQ · Gestão Ambiental</span>
          <div className="w-16" />
        </div>

        <div className="p-5">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { label: "Aspectos Monitorados", value: "32", color: "#10B981", trend: "↑ 4" },
              { label: "Requisitos Legais", value: "18", color: "#F59E0B", trend: "→ 0" },
              { label: "Metas Ambientais OK", value: "15/17", color: "#8B5CF6", trend: "↑ 2" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg p-3 border border-white/10"
                style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
              >
                <div
                  className="text-xs mb-1"
                  style={{ color: "rgba(255,255,255,0.4)", fontWeight: 400 }}
                >
                  {stat.label}
                </div>
                <div
                  className="text-lg"
                  style={{ color: stat.color, fontWeight: 700, lineHeight: 1.2 }}
                >
                  {stat.value}
                </div>
                <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {stat.trend} este mês
                </div>
              </div>
            ))}
          </div>

          {/* Flow diagram */}
          <div
            className="rounded-lg p-4 mb-4 border border-white/10"
            style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
          >
            <div className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
              Fluxo Integrado
            </div>
            <div className="flex items-center justify-between">
              {["Aspecto", "Legislação", "Meta", "Ação"].map((item, i) => (
                <div key={item} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-10 h-10 rounded flex items-center justify-center text-center"
                      style={{
                        backgroundColor:
                          i === 0
                            ? "rgba(16,185,129,0.2)"
                            : i === 1
                            ? "rgba(245,158,11,0.2)"
                            : i === 2
                            ? "rgba(59,130,246,0.2)"
                            : "rgba(139,92,246,0.2)",
                        border: `1px solid ${
                          i === 0
                            ? "rgba(16,185,129,0.3)"
                            : i === 1
                            ? "rgba(245,158,11,0.3)"
                            : i === 2
                            ? "rgba(59,130,246,0.3)"
                            : "rgba(139,92,246,0.3)"
                        }`,
                      }}
                    >
                      <span style={{ fontSize: "10px", color: "white", fontWeight: 600 }}>
                        {item.slice(0, 3)}
                      </span>
                    </div>
                    <span
                      style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)", marginTop: "4px" }}
                    >
                      {item}
                    </span>
                  </div>
                  {i < 3 && (
                    <div
                      className="mx-1"
                      style={{ color: "rgba(255,255,255,0.2)", fontSize: "16px" }}
                    >
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Action list */}
          <div className="space-y-2">
            {[
              {
                label: "ASP-15 · Geração de resíduos perigosos",
                status: "Monitorado",
                color: "#F59E0B",
                pct: 75,
              },
              {
                label: "LEG-08 · Licença de operação",
                status: "Em dia",
                color: "#10B981",
                pct: 100,
              },
              {
                label: "META-04 · Redução de consumo",
                status: "Atingido",
                color: "#3B82F6",
                pct: 110,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded px-3 py-2 border border-white/5"
                style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
              >
                <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", fontWeight: 400 }}>
                  {item.label}
                </span>
                <div className="flex items-center gap-2">
                  <div
                    className="w-16 h-1 rounded-full overflow-hidden"
                    style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${item.pct}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                  <span style={{ fontSize: "10px", color: item.color, fontWeight: 500 }}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
