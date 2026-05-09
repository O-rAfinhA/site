import {
  Building2,
  ClipboardCheck,
  BarChart3,
  Target,
  AlertOctagon,
  FileText,
  Wrench,
} from "lucide-react";

const bullets = [
  "RDO gera evidências vinculadas à obra e à etapa",
  "FVS aprovadas ficam conectadas ao serviço e ao fornecedor",
  "Não conformidades em obra abrem ações com rastreabilidade",
  "Controles técnicos, ensaios e qualificações geram ações",
];

/* ── Diagram data ── */
const originSources = [
  { label: "Obras", sub: "Planejamento e execução", color: "#B45A1C", bg: "#FDF5EE", border: "#F5CDA6", icon: Building2 },
  { label: "RDO", sub: "Registro diário de atividades", color: "#D97706", bg: "#FEF3E8", border: "#F5D8B3", icon: FileText },
  { label: "FVS", sub: "Verificação de serviços", color: "#059669", bg: "#EEFBF4", border: "#A6E4C4", icon: ClipboardCheck },
  { label: "Não Conformidades", sub: "Desvio registrado em obra", color: "#DC4545", bg: "#FDF0F0", border: "#F2B8B8", icon: AlertOctagon },
  { label: "Controles Técnicos", sub: "Ensaios e qualificações", color: "#7C3AED", bg: "#F5F0FF", border: "#CAB8F8", icon: Wrench },
  { label: "Indicadores", sub: "Meta fora do esperado", color: "#3B82F6", bg: "#EFF5FF", border: "#B3D1FC", icon: BarChart3 },
  { label: "Objetivos da Qualidade", sub: "Desdobramento em execução", color: "#0891B2", bg: "#EEFBFD", border: "#A6E0EB", icon: Target },
];

const centralFields = [
  "Origem rastreável",
  "Responsável",
  "Prazo",
  "Status",
  "Evidência",
  "Eficácia",
];

const outcomes = [
  "Responsável definido",
  "Prazo controlado",
  "Andamento visível",
  "Evidência registrada",
  "Eficácia verificada",
];

/* ════════════════════════════════════════════════════════════ */

export function MethodPBQPH() {
  return (
    <section id="metodo" className="py-24 lg:py-32" style={{ backgroundColor: "#FAFBFC" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-start">
          {/* ════════ Left column ════════ */}
          <div className="lg:sticky lg:top-28">
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
              Integração real da gestão
            </p>

            <h2
              style={{
                fontSize: "clamp(1.85rem, 3.2vw, 2.7rem)",
                fontWeight: 700,
                color: "#0B1F4B",
                lineHeight: 1.2,
                letterSpacing: "-0.025em",
                marginBottom: "1rem",
              }}
            >
              Nada fica solto no seu PBQP-H
            </h2>

            <p
              style={{
                fontSize: "1rem",
                color: "#64748B",
                lineHeight: 1.7,
                fontWeight: 400,
                maxWidth: "520px",
                marginBottom: "2rem",
              }}
            >
              Obras, RDO, FVS, não conformidades, controles técnicos e indicadores podem gerar ações conectadas, com origem clara, responsável, prazo e acompanhamento.
            </p>

            <div className="space-y-3 mb-8">
              {bullets.map((text) => (
                <div key={text} className="flex items-start gap-3">
                  <div
                    className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(180,90,28,0.08)" }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "#B45A1C" }}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: "0.88rem",
                      color: "#334155",
                      lineHeight: 1.6,
                      fontWeight: 480,
                    }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="rounded-xl px-6 py-4"
              style={{
                backgroundColor: "rgba(180,90,28,0.04)",
                borderLeft: "3px solid #B45A1C",
              }}
            >
              <p
                style={{
                  fontSize: "0.92rem",
                  color: "#0B1F4B",
                  fontWeight: 600,
                  lineHeight: 1.5,
                }}
              >
                Menos controles paralelos. Mais clareza para agir.
              </p>
            </div>
          </div>

          {/* ════════ Right column – Diagram ════════ */}
          <IntegrationDiagram />
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   Integration Diagram — 3 zones:  Origins → Central → Outcomes
   Desktop: horizontal flow with SVG connectors
   Mobile: vertical stacked flow
   ════════════════════════════════════════════════════════════ */

function IntegrationDiagram() {
  return (
    <div
      className="rounded-2xl border overflow-hidden"
      style={{
        backgroundColor: "#FFFFFF",
        borderColor: "rgba(0,0,0,0.06)",
        boxShadow: "0 1px 4px rgba(0,0,0,0.03), 0 8px 30px rgba(0,0,0,0.04)",
      }}
    >
      {/* Header */}
      <div className="px-6 sm:px-7 pt-5 sm:pt-6 pb-3 sm:pb-4">
        <span
          style={{
            fontSize: "0.68rem",
            color: "#94A3B8",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Fluxo integrado de geração e controle de ações
        </span>
      </div>

      {/* ── Desktop layout (≥768) ── */}
      <div className="hidden md:block px-4 lg:px-5 pb-5 lg:pb-6">
        <div className="flex items-stretch gap-0">
          {/* Zone 1: Origins */}
          <div style={{ flex: "1 1 0%", minWidth: 0 }}>
            <ZoneLabel>Origens da ação</ZoneLabel>
            <div className="space-y-1.5">
              {originSources.map((src) => (
                <OriginCard key={src.label} src={src} />
              ))}
            </div>
          </div>

          {/* Left connectors */}
          <div className="flex items-center" style={{ width: "32px", flexShrink: 0 }}>
            <svg
              width="32"
              viewBox="0 0 32 490"
              fill="none"
              className="h-full"
              preserveAspectRatio="none"
              style={{ minHeight: "440px" }}
            >
              {originSources.map((_, i) => {
                const y1 = 32 + i * 61;
                return (
                  <path
                    key={i}
                    d={`M0,${y1} C16,${y1} 16,245 32,245`}
                    stroke="#CBD5E1"
                    strokeWidth="1"
                    strokeOpacity="0.55"
                    fill="none"
                  />
                );
              })}
            </svg>
          </div>

          {/* Zone 2: Central */}
          <div className="flex items-center justify-center" style={{ width: "170px", flexShrink: 0 }}>
            <CentralCard />
          </div>

          {/* Right connectors */}
          <div className="flex items-center" style={{ width: "32px", flexShrink: 0 }}>
            <svg
              width="32"
              viewBox="0 0 32 490"
              fill="none"
              className="h-full"
              preserveAspectRatio="none"
              style={{ minHeight: "440px" }}
            >
              {outcomes.map((_, i) => {
                const y2 = 155 + i * 52;
                return (
                  <path
                    key={i}
                    d={`M0,245 C16,245 16,${y2} 32,${y2}`}
                    stroke="#CBD5E1"
                    strokeWidth="1"
                    strokeOpacity="0.55"
                    fill="none"
                  />
                );
              })}
            </svg>
          </div>

          {/* Zone 3: Outcomes */}
          <div
            className="flex flex-col justify-center"
            style={{ flex: "0 0 auto", minWidth: "140px" }}
          >
            <ZoneLabel>Controle e resultado</ZoneLabel>
            <div className="space-y-2">
              {outcomes.map((label) => (
                <OutcomeCard key={label} label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile layout (<768) ── */}
      <div className="md:hidden px-5 pb-5">
        {/* Origins */}
        <ZoneLabel>Origens da ação</ZoneLabel>
        <div className="grid grid-cols-2 gap-1.5 mb-5">
          {originSources.map((src) => (
            <OriginCard key={src.label} src={src} compact />
          ))}
        </div>

        {/* Down arrow */}
        <div className="flex justify-center mb-4">
          <div className="flex flex-col items-center gap-1">
            <div className="w-px h-6" style={{ backgroundColor: "#CBD5E1" }} />
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M5 8L0 0h10L5 8z" fill="#CBD5E1" />
            </svg>
          </div>
        </div>

        {/* Central */}
        <div className="mb-4">
          <CentralCard />
        </div>

        {/* Down arrow */}
        <div className="flex justify-center mb-4">
          <div className="flex flex-col items-center gap-1">
            <div className="w-px h-6" style={{ backgroundColor: "#CBD5E1" }} />
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M5 8L0 0h10L5 8z" fill="#CBD5E1" />
            </svg>
          </div>
        </div>

        {/* Outcomes */}
        <ZoneLabel>Controle e resultado</ZoneLabel>
        <div className="grid grid-cols-2 gap-1.5">
          {outcomes.map((label) => (
            <OutcomeCard key={label} label={label} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Sub-components ── */

function ZoneLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="mb-2.5 px-0.5"
      style={{
        fontSize: "0.62rem",
        fontWeight: 600,
        color: "#94A3B8",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
      }}
    >
      {children}
    </p>
  );
}

function OriginCard({
  src,
  compact,
}: {
  src: (typeof originSources)[number];
  compact?: boolean;
}) {
  const Icon = src.icon;
  return (
    <div
      className="rounded-lg border"
      style={{
        backgroundColor: src.bg,
        borderColor: src.border,
        padding: compact ? "8px 10px" : "8px 12px",
      }}
    >
      <div className="flex items-center gap-1.5 mb-0.5">
        <Icon
          size={compact ? 11 : 12}
          style={{ color: src.color }}
          strokeWidth={2.2}
        />
        <span
          style={{
            fontSize: compact ? "0.65rem" : "0.7rem",
            fontWeight: 650,
            color: src.color,
            lineHeight: 1.2,
          }}
        >
          {src.label}
        </span>
      </div>
      {!compact && (
        <p
          style={{
            fontSize: "0.58rem",
            color: "#8896A8",
            fontWeight: 400,
            lineHeight: 1.4,
            paddingLeft: "1.2rem",
          }}
        >
          {src.sub}
        </p>
      )}
    </div>
  );
}

function CentralCard() {
  return (
    <div
      className="w-full rounded-xl px-5 py-5"
      style={{
        backgroundColor: "#B45A1C",
        boxShadow:
          "0 4px 24px rgba(180,90,28,0.28), 0 1px 4px rgba(180,90,28,0.12)",
      }}
    >
      <p
        style={{
          fontSize: "0.82rem",
          fontWeight: 700,
          color: "#FFFFFF",
          lineHeight: 1.3,
          marginBottom: "5px",
        }}
      >
        Plano de Ação Integrado
      </p>
      <p
        style={{
          fontSize: "0.6rem",
          fontWeight: 400,
          color: "rgba(255,255,255,0.58)",
          lineHeight: 1.5,
          marginBottom: "12px",
        }}
      >
        Toda ação nasce com contexto, origem e rastreabilidade.
      </p>
      <div className="flex flex-wrap gap-1.5">
        {centralFields.map((field) => (
          <span
            key={field}
            className="px-2 py-0.5 rounded"
            style={{
              fontSize: "0.55rem",
              fontWeight: 500,
              color: "rgba(255,255,255,0.78)",
              backgroundColor: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {field}
          </span>
        ))}
      </div>
    </div>
  );
}

function OutcomeCard({ label }: { label: string }) {
  return (
    <div
      className="rounded-lg border flex items-center gap-2 px-3 py-2.5"
      style={{
        backgroundColor: "#FEF3E8",
        borderColor: "#F5D8B3",
      }}
    >
      <div
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: "#B45A1C", opacity: 0.45 }}
      />
      <span style={{ fontSize: "0.68rem", fontWeight: 560, color: "#78350F" }}>
        {label}
      </span>
    </div>
  );
}
