import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Shield,
  Leaf,
  HardHat,
  Lock,
  MousePointer2,
  LayoutDashboard,
  CheckCircle2,
  Layers,
  Target,
  BarChart3,
  Calendar,
  MessageCircle,
  ChevronRight,
  Rocket,
  Award,
  FileSpreadsheet,
  Cog,
  AlertTriangle,
  Handshake,
  UserPlus,
  Gift,
  Building2,
  Factory,
  Wrench,
  BookOpen,
  ClipboardCheck,
  Puzzle,
  Users,
  TrendingUp,
  Eye,
  Zap,
  Clock,
  CheckSquare,
  RefreshCw,
  BadgeCheck,
  LayoutGrid,
} from "lucide-react";
import awsLogo from "../../imports/amazon-web-1.png";

/* ═══════════════════════════════════════════════════════════════
   HOME — Institucional · Comercial · Direcionadora
   ═══════════════════════════════════════════════════════════════ */

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeVisitorMoment />
      <HomeInstantAudit />
      <HomeSolutions />
      <HomeDifferentials />
      <HomeInfrastructure />
      <HomePlatform />
      <HomePillars />
      <HomePartners />
      <HomeAuthority />
      <HomeCTA />
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   1 · HERO
   ═══════════════════════════════════════════════════════════════ */

function HomeHero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ backgroundColor: "#0B1F4B" }}
    >
      {/* BG decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ backgroundColor: "#004BA8", filter: "blur(100px)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5"
          style={{ backgroundColor: "#60A5FA", filter: "blur(100px)" }}
        />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
          <defs>
            <pattern id="hg" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth=".5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hg)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 border border-blue-400/25"
              style={{ backgroundColor: "rgba(0,75,168,0.12)" }}
            >
              <ShieldCheck size={14} className="text-blue-400" />
              <span
                className="text-blue-300"
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Método Gestão Estruturada™
              </span>
            </div>

            <h1
              className="text-white mb-6"
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
              }}
            ><span className="font-bold">Uma plataforma para tirar a gestão da planilha e colocar controle na rotina.</span></h1>

            <p
              className="text-white/55 mb-10"
              style={{
                fontSize: "1.05rem",
                fontWeight: 400,
                lineHeight: 1.75,
                maxWidth: "540px",
              }}
            >
              O SisteQ ajuda empresas e consultorias a implantar, manter e evoluir
              certificações com menos planilhas, mais rastreabilidade e uma gestão
              integrada de verdade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/demonstracao"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded text-white text-sm transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#004BA8",
                  fontWeight: 600,
                  boxShadow: "0 8px 24px rgba(0,75,168,0.45)",
                }}
              >
                Solicitar demonstração
                <ArrowRight size={16} />
              </Link>
              <a
                href="#solucoes"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded text-white/80 text-sm border border-white/20 transition-all hover:border-white/40 hover:text-white"
                style={{ fontWeight: 500 }}
              >
                Conhecer soluções
              </a>
            </div>

            {/* Norm shortcuts */}
            <div className="flex flex-wrap items-center gap-3">
              {[
                { label: "ISO 9001", href: "/solucao/iso-9001", color: "#3B82F6", bg: "rgba(59,130,246,0.12)", border: "rgba(59,130,246,0.25)" },
                { label: "ISO 14001", href: "/solucao/iso-14001", color: "#10B981", bg: "rgba(16,185,129,0.12)", border: "rgba(16,185,129,0.25)" },
                { label: "PBQP-H", href: "/solucao/pbqp-h", color: "#F59E0B", bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.25)" },
              ].map((n) => (
                <Link
                  key={n.label}
                  href={n.href}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition-all hover:opacity-80"
                  style={{
                    backgroundColor: n.bg,
                    borderColor: n.border,
                  }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: n.color }} />
                  <span style={{ fontSize: "0.8rem", fontWeight: 600, color: n.color }}>
                    {n.label}
                  </span>
                </Link>
              ))}
              <Link
                href="/solucao/outras-normas"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition-all hover:opacity-80"
                style={{
                  backgroundColor: "rgba(124,58,237,0.12)",
                  borderColor: "rgba(124,58,237,0.25)",
                }}
              >
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#8B5CF6" }} />
                <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#A78BFA" }}>
                  Outras normas
                </span>
              </Link>
            </div>
          </div>

          {/* Platform mockup */}
          <div className="hidden lg:block">
            <HeroPlatformMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Mockup ── */
function HeroPlatformMockup() {
  return (
    <div className="relative">
      <div
        className="absolute -inset-4 rounded-2xl opacity-20"
        style={{ backgroundColor: "#004BA8", filter: "blur(40px)" }}
      />
      <div
        className="relative rounded-2xl overflow-hidden border border-white/10"
        style={{ backgroundColor: "#0F2968", boxShadow: "0 40px 80px rgba(0,0,0,0.5)" }}
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
          <span className="text-white/40 text-xs">SisteQ · Visão Geral</span>
          <div className="w-16" />
        </div>

        <div className="p-5">
          {/* Norm tabs */}
          <div className="flex gap-2 mb-4">
            {[
              { label: "ISO 9001", color: "#3B82F6", active: true },
              { label: "ISO 14001", color: "#10B981", active: false },
              { label: "PBQP-H", color: "#F59E0B", active: false },
            ].map((tab) => (
              <div
                key={tab.label}
                className="px-3 py-1.5 rounded-md text-xs"
                style={{
                  backgroundColor: tab.active ? "rgba(59,130,246,0.15)" : "rgba(255,255,255,0.04)",
                  color: tab.active ? tab.color : "rgba(255,255,255,0.35)",
                  fontWeight: tab.active ? 600 : 400,
                  border: tab.active ? `1px solid ${tab.color}30` : "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {tab.label}
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { label: "Processos", value: "32", color: "#3B82F6" },
              { label: "Ações Ativas", value: "14", color: "#10B981" },
              { label: "Conformidade", value: "94%", color: "#8B5CF6" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-lg p-3 border border-white/10"
                style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
              >
                <div className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>
                  {s.label}
                </div>
                <div className="text-lg" style={{ color: s.color, fontWeight: 700, lineHeight: 1.2 }}>
                  {s.value}
                </div>
              </div>
            ))}
          </div>

          {/* Activity */}
          <div className="space-y-2">
            {[
              { label: "Auditoria interna Q3 concluída", status: "OK", color: "#10B981" },
              { label: "NC-024 · Ação corretiva em andamento", status: "Ativo", color: "#3B82F6" },
              { label: "Calibração EQ-08 vencendo em 5 dias", status: "Alerta", color: "#F59E0B" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded px-3 py-2 border border-white/5"
                style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
              >
                <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", fontWeight: 400 }}>
                  {item.label}
                </span>
                <span style={{ fontSize: "10px", color: item.color, fontWeight: 500 }}>{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   2 · VISITOR MOMENT — Dobra 2
   ═══════════════════════════════════════════════════════════════ */

const forWhomCards = [
  {
    icon: Award,
    title: "Já sou certificado, mas a gestão depende de planilhas e controles paralelos",
    desc: "Para empresas que precisam manter o sistema vivo entre auditorias.",
    color: "#004BA8",
    bg: "rgba(0,75,168,0.06)",
  },
  {
    icon: Rocket,
    title: "Estou implantando o sistema de gestão",
    desc: "Para empresas que querem estruturar a gestão desde o início, com organização real.",
    color: "#059669",
    bg: "rgba(5,150,105,0.06)",
  },
  {
    icon: TrendingUp,
    title: "Minha operação ficou mais complexa que meu controle",
    desc: "Para empresas que cresceram e precisam de uma plataforma à altura da rotina atual.",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.06)",
  },
  {
    icon: Handshake,
    title: "Tenho consultoria e quero uma plataforma à altura",
    desc: "Para consultorias e parceiros que querem entregar mais valor sem desenvolver sistema próprio.",
    color: "#D97706",
    bg: "rgba(217,119,6,0.06)",
  },
];

function HomeVisitorMoment() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-18">
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
            Para quem o SisteQ faz sentido
          </p>
          <h2
            style={{
              fontSize: "clamp(1.85rem, 3.2vw, 2.7rem)",
              fontWeight: 700,
              color: "#0B1F4B",
              lineHeight: 1.2,
              letterSpacing: "-0.025em",
            }}
          >
            Empresas que levam a gestão a sério encontram aqui o nível certo de controle.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {forWhomCards.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.title}
                className="rounded-2xl border p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "rgba(0,0,0,0.06)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: m.bg }}
                >
                  <Icon size={22} style={{ color: m.color }} strokeWidth={1.8} />
                </div>
                <h3
                  className="mb-3"
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#0B1F4B",
                    lineHeight: 1.35,
                  }}
                >
                  {m.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#64748B",
                    lineHeight: 1.65,
                    fontWeight: 400,
                  }}
                >
                  {m.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   3 · INSTANT AUDIT — Conceito Exclusivo
   ═══════════════════════════════════════════════════════════════ */

function HomeInstantAudit() {
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
            >Auditoria Instantânea</h2>

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
            >Um painel que mostra em tempo real as pendências, atrasos e tarefas não executadas em todos os módulos da plataforma. Você vê o estado real da gestão antes de qualquer auditoria interna ou de certificação.</p>

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
              >Você descobre o problema antes da sua auditoria! </p>
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

/* ═══════════════════════════════════════════════════════════════
   4 · SOLUTIONS BY NORM — Dobra 3
   ═══════════════════════════════════════════════════════════════ */

const solCards = [
  {
    norm: "ISO 9001",
    title: "Qualidade",
    tagline: "Estrutura completa e integrada para implantar, manter e evoluir a ISO 9001.",
    color: "#004BA8",
    bg: "rgba(0,75,168,0.06)",
    border: "rgba(0,75,168,0.15)",
    icon: Shield,
    href: "/solucao/iso-9001",
    features: [
      "Gestão estratégica",
      "Mapeamento de processos",
      "Gestão de documentos",
      "Indicadores e metas",
      "Gestão de riscos",
      "Auditorias",
      "Planos de ação",
      "Gestão de pessoas",
      "Gestão de fornecedores",
      "Instrumentos de Medição",
      "Gestão de manutenção",
      { text: "Auditoria Instantânea", highlighted: true },
    ],
    available: true,
  },
  {
    norm: "ISO 14001",
    title: "Meio Ambiente",
    tagline: "Gestão ambiental organizada para controle, evidência e melhoria contínua.",
    color: "#0D7C4A",
    bg: "rgba(13,124,74,0.06)",
    border: "rgba(13,124,74,0.15)",
    icon: Leaf,
    href: "/solucao/iso-14001",
    features: [
      "Levantamento de aspectos ambientais",
      "Avaliação de impactos ambientais",
      "Gerenciamento de resíduos",
      "Controle de produtos químicos",
      "Requisitos legais ambientais",
      "Emergências ambientais",
      "Controles operacionais",
      "Objetivos e monitoramentos",
      "Auditorias e planos de ação",
      { text: "Auditoria Instantânea", highlighted: true },
    ],
    available: true,
  },
  {
    norm: "PBQP-H",
    title: "Construção",
    tagline: "Solução estruturada para construtoras com foco em controle, evidência e rotina real da obra.",
    color: "#B45A1C",
    bg: "rgba(180,90,28,0.06)",
    border: "rgba(180,90,28,0.15)",
    icon: HardHat,
    href: "/solucao/pbqp-h",
    features: [
      "Cronograma de obras",
      "Diário de Obra (RDO)",
      "Plano da Qualidade da Obra",
      "Fichas de Verificação de Serviço",
      "Procedimentos de Execução",
      "Registros de Ocorrência de Obra",
      "Perfil de Desempenho da Edificação",
      "Plano de Controle Tecnológico",
      "Controle de evidências da obra",
      "App - Diário de Obra + Ocorrências",
      { text: "Auditoria Instantânea", highlighted: true },
    ],
    available: true,
    highlight: true,
  },
];

function HomeSolutions() {
  return (
    <section id="solucoes" className="py-24 lg:py-32" style={{ backgroundColor: "#F8FAFC" }}>
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
            Soluções por norma
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
            Uma plataforma. Múltiplos sistemas de gestão.
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#64748B",
              lineHeight: 1.7,
              fontWeight: 400,
              maxWidth: "620px",
              margin: "0 auto",
            }}
          >
            Cada norma tem suas particularidades. O SisteQ respeita isso, mas mantém uma base
            metodológica única: o Método Gestão Estruturada™.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {solCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.norm}
                className="rounded-2xl border p-7 lg:p-8 flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: card.border,
                  opacity: card.available ? 1 : 0.85,
                }}
              >
                {/* Highlight ribbon for PBQP-H */}
                {card.highlight && (
                  <div
                    className="absolute -top-px left-6 right-6 h-1 rounded-b-full"
                    style={{ backgroundColor: card.color }}
                  />
                )}

                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: card.bg }}
                  >
                    <Icon size={20} style={{ color: card.color }} strokeWidth={2} />
                  </div>
                  {!card.available && (
                    <span
                      className="px-2.5 py-1 rounded-md"
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 600,
                        color: "#94A3B8",
                        backgroundColor: "#F1F5F9",
                      }}
                    >
                      Em breve
                    </span>
                  )}
                </div>

                <div className="mb-1">
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: card.color,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {card.norm}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "#0B1F4B",
                    lineHeight: 1.3,
                    marginBottom: "0.75rem",
                  }}
                >
                  {card.title}
                </h3>

                {/* Feature list */}
                <div className="space-y-2 flex-1 mb-5">
                  {card.features.map((f, idx) => {
                    const isHighlighted = typeof f === 'object' && f.highlighted;
                    const featureText = typeof f === 'string' ? f : f.text;
                    return (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={14}
                          style={{ color: card.color, flexShrink: 0, marginTop: "3px", opacity: 0.65 }}
                          strokeWidth={2}
                        />
                        <span
                          style={{
                            fontSize: "0.82rem",
                            color: isHighlighted ? card.color : "#475569",
                            lineHeight: 1.45,
                            fontWeight: isHighlighted ? 600 : 450,
                          }}
                        >
                          {featureText}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Closing phrase */}
                <p
                  className="mb-5"
                  style={{
                    fontSize: "0.8rem",
                    color: "#0B1F4B",
                    fontWeight: 600,
                    lineHeight: 1.5,
                    borderTop: "1px solid rgba(0,0,0,0.05)",
                    paddingTop: "12px",
                  }}
                >
                  {card.tagline}
                </p>

                {/* CTA */}
                {card.available ? (
                  <Link
                    href={card.href}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm text-white transition-all hover:opacity-90"
                    style={{ backgroundColor: card.color, fontWeight: 600 }}
                  >
                    Ver solução {card.norm}
                    <ChevronRight size={15} />
                  </Link>
                ) : (
                  <div
                    className="inline-flex items-center justify-center w-full py-3 rounded-lg text-sm border"
                    style={{ borderColor: card.border, color: card.color, fontWeight: 500, opacity: 0.6 }}
                  >
                    Ver solução {card.norm}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Horizontal card — Outras normas */}
        <div
          className="mt-6 lg:mt-8 rounded-2xl border p-7 lg:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "rgba(124,58,237,0.15)",
          }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
            {/* Icon + Text */}
            <div className="flex items-start gap-4 lg:flex-1">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(124,58,237,0.07)" }}
              >
                <LayoutGrid size={20} style={{ color: "#7C3AED" }} strokeWidth={2} />
              </div>
              <div className="flex-1">
                <h3
                  className="mb-2"
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "#0B1F4B",
                    lineHeight: 1.3,
                  }}
                >
                  O SisteQ também apoia outras normas de gestão
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#64748B",
                    lineHeight: 1.65,
                    fontWeight: 400,
                    maxWidth: "640px",
                  }}
                >
                  Base integrada para empresas que trabalham com diferentes normas. Documentos, processos, riscos, ações, auditorias, indicadores, pessoas e fornecedores em um único ambiente.
                </p>
              </div>
            </div>

            {/* Chips + CTA */}
            <div className="flex flex-col gap-4 lg:items-end lg:flex-shrink-0">
              <div className="flex flex-wrap gap-2">
                {["ISO 45001", "ISO 27001", "ISO 37001", "ISO 37301", "ISO 22000", "ISO 31000"].map((norm) => (
                  <span
                    key={norm}
                    className="px-3 py-1.5 rounded-lg"
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      color: "#7C3AED",
                      backgroundColor: "rgba(124,58,237,0.07)",
                      border: "1px solid rgba(124,58,237,0.15)",
                    }}
                  >
                    {norm}
                  </span>
                ))}
              </div>
              <Link
                href="/solucao/outras-normas"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm text-white transition-all hover:opacity-90 whitespace-nowrap"
                style={{ backgroundColor: "#7C3AED", fontWeight: 600 }}
              >
                Ver solução para outras normas
                <ChevronRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   4 · DIFFERENTIALS — Dobra 4
   ═══════════════════════════════════════════════════════════════ */

const differentials = [
  {
    icon: Layers,
    title: "Estruturado para sistemas de gestão",
    desc: "Organiza documentos, processos, indicadores, metas, riscos, ações e evidências dentro de uma lógica prática de gestão.",
  },
  {
    icon: Puzzle,
    title: "Plataforma Independente",
    desc: "Use com sua equipe interna, consultoria atual ou parceiro especializado, mantendo todos os envolvidos organizados na mesma plataforma.",
  },
  {
    icon: Target,
    title: "Para implantação e manutenção",
    desc: "Ajuda a estruturar a implantação e também a manter o sistema de gestão vivo depois da certificação.",
  },
  {
    icon: Eye,
    title: "Pendências visíveis antes da auditoria",
    desc: "Acompanhe atrasos, responsáveis, ações, rotinas e evidências sem esperar a próxima auditoria para descobrir falhas.",
  },
  {
    icon: HardHat,
    title: "Gestão integrada para obras",
    desc: "Recursos para acompanhar obras, serviços, inspeções, registros de campo e controle da execução em uma única plataforma.",
  },
  {
    icon: Zap,
    title: "Mais prático que sistemas pesados",
    desc: "Estrutura robusta para empresas certificadas, com navegação simples, intuitiva e foco na rotina real da equipe.",
  },
];

function HomeDifferentials() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-18">
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
            Diferenciais
          </p>
          <h2
            style={{
              fontSize: "clamp(1.85rem, 3.2vw, 2.7rem)",
              fontWeight: 700,
              color: "#0B1F4B",
              lineHeight: 1.2,
              letterSpacing: "-0.025em",
            }}
          >
            Por que o SisteQ é diferente.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {differentials.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.title}
                className="rounded-2xl border p-7 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#FAFBFC",
                  borderColor: "rgba(0,0,0,0.06)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: "rgba(0,75,168,0.07)" }}
                >
                  <Icon size={20} style={{ color: "#004BA8" }} strokeWidth={1.8} />
                </div>
                <h3
                  className="mb-2"
                  style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0B1F4B", lineHeight: 1.35 }}
                >
                  {d.title}
                </h3>
                <p
                  style={{ fontSize: "0.85rem", color: "#64748B", lineHeight: 1.65, fontWeight: 400 }}
                >
                  {d.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   5 · PLATFORM STRUCTURE — Dobra 5
   ═══════════════════════════════════════════════════════════════ */

const platformGroups = [
  {
    title: "Estratégia e objetivos",
    items: ["SWOT", "Plano Estratégico", "Objetivos da Qualidade", "Indicadores Estratégicos"],
    color: "#004BA8",
    icon: Target,
  },
  {
    title: "Processos, documentos e registros",
    items: ["Mapeamento de Processos", "Controle de Documentos", "Registros", "Fluxogramas"],
    color: "#0891B2",
    icon: Layers,
  },
  {
    title: "Indicadores e análise crítica",
    items: ["Indicadores Operacionais", "Dashboards", "Análise Crítica da Direção", "Relatórios"],
    color: "#8B5CF6",
    icon: BarChart3,
  },
  {
    title: "Auditorias, riscos e ações",
    items: ["Auditorias Internas", "Não Conformidades", "Riscos e Oportunidades", "Plano de Ação Integrado"],
    color: "#D97706",
    icon: ClipboardCheck,
  },
  {
    title: "Pessoas e fornecedores",
    items: ["Competências", "Treinamentos", "Avaliação de Fornecedores", "Qualificação"],
    color: "#059669",
    icon: Users,
  },
  {
    title: "Equipamentos, calibração e manutenção",
    items: ["Cadastro de Equipamentos", "Plano de Calibração", "Manutenção Preventiva", "Alertas de Vencimento"],
    color: "#DC4545",
    icon: Wrench,
  },
  {
    title: "Obras e controle de campo",
    items: ["Cronograma de Obras", "Diário de Obra", "FVS", "PES", "Ocorrências", "App de Campo"],
    color: "#B45A1C",
    icon: HardHat,
  },
];

/* ═══════════════════════════════════════════════════════════════
   INFRASTRUCTURE
   ═══════════════════════════════════════════════════════════════ */

function HomeInfrastructure() {
  const securityItems = [
    {
      icon: Lock,
      text: "Criptografia AES-256 em repouso e em trânsito",
    },
    {
      icon: RefreshCw,
      text: "Backups automáticos diários com retenção de 30 dias",
    },
    {
      icon: Shield,
      text: "SLA de disponibilidade de 99,9%",
    },
    {
      icon: BadgeCheck,
      text: "Conformidade com LGPD e ISO 27001 da AWS",
    },
  ];

  return (
    <section id="infraestrutura" className="py-20" style={{ backgroundColor: "#F9FAFB" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - 6/12 */}
          <div className="lg:col-span-6">
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 border border-blue-400/25"
              style={{ backgroundColor: "rgba(0,75,168,0.08)" }}
            >
              <Shield size={14} style={{ color: "#004BA8" }} />
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#004BA8",
                }}
              >
                Infraestrutura
              </span>
            </div>

            {/* Title */}
            <h2
              className="mb-5"
              style={{
                fontSize: "2rem",
                fontWeight: 600,
                lineHeight: 1.3,
                color: "#111827",
              }}
            >
              A mesma infraestrutura usada pelas maiores plataformas do mundo.
            </h2>

            {/* Description */}
            <p
              className="max-w-xl"
              style={{
                fontSize: "1rem",
                color: "#4B5563",
                lineHeight: 1.6,
              }}
            >
              O SisteQ é hospedado na Amazon Web Services (AWS), a infraestrutura de nuvem que sustenta operações críticas de bancos, redes hospitalares e órgãos governamentais ao redor do mundo. Seus dados de gestão protegidos pelo mesmo padrão de segurança.
            </p>
          </div>

          {/* Right Column - 6/12 */}
          <div className="lg:col-span-6">
            <div
              className="bg-white rounded-xl p-6 border shadow-sm"
              style={{ borderColor: "#E5E7EB" }}
            >
              {/* AWS Logo */}
              <Image
                src={awsLogo}
                alt="Amazon Web Services"
                className="mb-8"
                width={160}
                height={50}
                style={{ width: "160px", height: "auto" }}
              />

              {/* Divider */}
              <div className="h-px bg-gray-200 mb-6"></div>

              {/* Security Items */}
              <div className="space-y-4">
                {securityItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <Icon size={20} style={{ color: "#2563EB", flexShrink: 0 }} />
                      <span
                        style={{
                          fontSize: "0.9375rem",
                          color: "#374151",
                          fontWeight: 500,
                          lineHeight: 1.5,
                        }}
                      >
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePlatform() {
  return (
    <section id="plataforma" className="py-24 lg:py-32" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-18">
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
            Estrutura da plataforma
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
            Tudo conectado, nada solto.
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#64748B",
              lineHeight: 1.7,
              fontWeight: 400,
              maxWidth: "580px",
              margin: "0 auto",
            }}
          >
            O SisteQ organiza a gestão em agrupamentos inteligentes, onde cada área se conecta
            às demais com rastreabilidade e contexto.
          </p>
        </div>

        {/* Top row: 4 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
          {platformGroups.slice(0, 4).map((g) => (
            <PlatformGroupCard key={g.title} group={g} />
          ))}
        </div>
        {/* Bottom row: 3 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {platformGroups.slice(4).map((g) => (
            <PlatformGroupCard key={g.title} group={g} />
          ))}
        </div>

        {/* Summary note */}
        <div className="max-w-3xl mx-auto text-center mt-12">
          <p
            style={{
              fontSize: "0.95rem",
              color: "#64748B",
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            Esta é uma <span style={{ fontWeight: 600, color: "#0B1F4B" }}>visão resumida</span> da estrutura do SisteQ. A plataforma reúne outros recursos e funcionalidades integrados à rotina da empresa.
          </p>
        </div>
      </div>
    </section>
  );
}

function PlatformGroupCard({ group }: { group: (typeof platformGroups)[number] }) {
  const Icon = group.icon;
  return (
    <div
      className="rounded-2xl border p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
      style={{ backgroundColor: "#FFFFFF", borderColor: `${group.color}20` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${group.color}10` }}
        >
          <Icon size={17} style={{ color: group.color }} strokeWidth={2} />
        </div>
        <h3
          style={{
            fontSize: "0.88rem",
            fontWeight: 700,
            color: "#0B1F4B",
            lineHeight: 1.3,
          }}
        >
          {group.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {group.items.map((item) => (
          <span
            key={item}
            className="px-2.5 py-1 rounded-md"
            style={{
              fontSize: "0.72rem",
              fontWeight: 500,
              color: "#475569",
              backgroundColor: "#F1F5F9",
              border: "1px solid rgba(0,0,0,0.04)",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   6 · PILLARS (unchanged concept) — stays as is
   ═══════════════════════════════════════════════════════════════ */

const pillarsData = [
  {
    icon: Lock,
    title: "Alto Controle",
    subtitle: "Rastreabilidade de ponta a ponta",
    desc: "Cada ação tem origem rastreável. Cada documento tem histórico. Cada indicador está conectado ao processo. Nada se perde.",
    color: "#004BA8",
    bg: "rgba(0,75,168,0.07)",
    metric: { value: "100%", label: "Rastreabilidade" },
  },
  {
    icon: MousePointer2,
    title: "Fácil e Intuitivo",
    subtitle: "Projetado para o gestor, não para o TI",
    desc: "Interface limpa, navegação guiada pelo fluxo da gestão. Equipes operando em dias, não meses. Sem complexidade desnecessária.",
    color: "#059669",
    bg: "rgba(5,150,105,0.07)",
    metric: { value: "30 dias", label: "Para estar operacional" },
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards Ricos",
    subtitle: "Números que orientam decisões reais",
    desc: "KPIs consolidados em tempo real, matriz de riscos visual, painel de análise crítica completo. Relatórios automáticos para a direção.",
    color: "#D97706",
    bg: "rgba(217,119,6,0.07)",
    metric: { value: "360°", label: "Visão da gestão" },
  },
];

function HomePillars() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
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
            Três pilares
          </p>
          <h2
            style={{
              fontSize: "clamp(1.85rem, 3.2vw, 2.7rem)",
              fontWeight: 700,
              color: "#0B1F4B",
              lineHeight: 1.2,
              letterSpacing: "-0.025em",
            }}
          >
            Controle, facilidade e inteligência.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pillarsData.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-2xl border p-7 lg:p-9 flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: "#FAFBFC", borderColor: "rgba(0,0,0,0.06)" }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: pillar.bg }}
                  >
                    <Icon size={20} style={{ color: pillar.color }} strokeWidth={2} />
                  </div>
                  <div>
                    <h3
                      style={{ fontSize: "1rem", fontWeight: 700, color: "#0B1F4B", lineHeight: 1.2 }}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      style={{ fontSize: "0.72rem", color: pillar.color, fontWeight: 500, marginTop: "2px" }}
                    >
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>
                <p
                  className="flex-1"
                  style={{
                    fontSize: "0.85rem",
                    color: "#64748B",
                    lineHeight: 1.7,
                    fontWeight: 400,
                    marginBottom: "1.5rem",
                  }}
                >
                  {pillar.desc}
                </p>
                <div className="rounded-xl p-4" style={{ backgroundColor: "#FFFFFF" }}>
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      color: pillar.color,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.1,
                    }}
                  >
                    {pillar.metric.value}
                  </div>
                  <div
                    style={{ fontSize: "0.72rem", color: "#94A3B8", marginTop: "3px", fontWeight: 400 }}
                  >
                    {pillar.metric.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════════════
   8 · PARTNERS & CONSULTANCIES — Dobra 7 (new)
   ═══════════════════════════════════════════════════════════════ */

const partnerBlocks = [
  {
    icon: Handshake,
    title: "Consultorias parceiras",
    desc: "Use o SisteQ para implantar com mais organização, clareza e valor percebido para o cliente.",
    color: "#004BA8",
    bg: "rgba(0,75,168,0.06)",
  },
  {
    icon: UserPlus,
    title: "Parceiro implantador",
    desc: "Venda, implante e acompanhe clientes com apoio estruturado e recorrência sobre a assinatura.",
    color: "#059669",
    bg: "rgba(5,150,105,0.06)",
  },
  {
    icon: Gift,
    title: "Parceiro indicador",
    desc: "Indique clientes para o SisteQ e tenha um modelo simples e atrativo de comissão.",
    color: "#D97706",
    bg: "rgba(217,119,6,0.06)",
  },
];

function HomePartners() {
  return (
    <section id="parceiros" className="py-24 lg:py-32" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">
          {/* Left */}
          <div>
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
              Parceiros e consultorias
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
              Também feito para consultorias e parceiros.
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "#64748B",
                lineHeight: 1.7,
                fontWeight: 400,
                maxWidth: "480px",
                marginBottom: "2rem",
              }}
            >
              Consultorias parceiras, implantadores e indicadores podem usar o SisteQ
              para fortalecer sua entrega, escalar sua operação e criar recorrência.
              Empresas atendidas por outras consultorias também são bem-vindas.
            </p>
            <Link
              href="/parceiros"
              className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#004BA8", fontWeight: 600 }}
            >
              Conheça o modelo de parceria
              <ChevronRight size={16} />
            </Link>
          </div>

          {/* Right — cards */}
          <div className="space-y-5">
            {partnerBlocks.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="rounded-2xl border p-6 flex items-start gap-5 transition-all duration-300 hover:shadow-md"
                  style={{ backgroundColor: "#FAFBFC", borderColor: "rgba(0,0,0,0.06)" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: p.bg }}
                  >
                    <Icon size={22} style={{ color: p.color }} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3
                      className="mb-1"
                      style={{ fontSize: "1rem", fontWeight: 700, color: "#0B1F4B", lineHeight: 1.3 }}
                    >
                      {p.title}
                    </h3>
                    <p
                      style={{ fontSize: "0.85rem", color: "#64748B", lineHeight: 1.65, fontWeight: 400 }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   9 · AUTHORITY — Dobra 8
   ═══════════════════════════════════════════════════════════════ */

function HomeAuthority() {
  const cards = [
    {
      highlight: "+20 anos",
      text: "de experiência prática em sistemas de gestão pelos profissionais que desenvolveram o SisteQ.",
    },
    {
      highlight: "Método validado",
      text: "nascido de centenas de implantações e auditorias reais antes de virar plataforma.",
    },
    {
      highlight: "Foco na dor real",
      text: "Não é mais um software de qualidade. É a resposta para a empresa que já certificou e ainda luta para manter o sistema vivo entre auditorias.",
    },
  ];

  return (
    <section
      id="sobre"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "#0B1F4B" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ backgroundColor: "#004BA8", filter: "blur(100px)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5"
          style={{ backgroundColor: "#60A5FA", filter: "blur(80px)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          <div>
            <p
              className="mb-4"
              style={{
                color: "#60A5FA",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Origem e Autoridade
            </p>
            <h2
              style={{
                fontSize: "clamp(1.85rem, 3.2vw, 2.7rem)",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.2,
                letterSpacing: "-0.025em",
                marginBottom: "1rem",
              }}
            >
              Construído por quem viveu o problema.
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.75,
                fontWeight: 400,
                maxWidth: "520px",
                marginBottom: "2rem",
              }}
            >
              O SisteQ não é uma plataforma criada do zero por um time de tecnologia. É a
              continuação natural de mais de 20 anos de prática em implantação, manutenção e
              auditoria de sistemas de gestão. Quem desenvolveu o produto vive a rotina do
              cliente — sabe o que falta, o que sobra e o que realmente faz diferença.
            </p>

            <div
              className="rounded-xl px-6 py-4"
              style={{ backgroundColor: "rgba(255,255,255,0.04)", borderLeft: "3px solid #60A5FA" }}
            >
              <p
                style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.75)", fontWeight: 500, lineHeight: 1.6 }}
              >
                "Quando tudo está conectado, o gestor para de apagar incêndios e começa
                a prevenir problemas antes que eles aconteçam."
              </p>
              <p
                className="mt-2"
                style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", fontWeight: 400 }}
              >
                — Princípio que orienta o desenvolvimento do SisteQ
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-5">
            {cards.map((card, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 border"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="mb-2"
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    color: "#60A5FA",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                  }}
                >
                  {card.highlight}
                </div>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.6,
                    fontWeight: 400,
                  }}
                >
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   10 · CTA FINAL
   ═══════════════════════════════════════════════════════════════ */

function HomeCTA() {
  return (
    <section id="contato" className="py-24 lg:py-32" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div
          className="rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden"
          style={{ backgroundColor: "#0B1F4B" }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full opacity-15"
              style={{ backgroundColor: "#004BA8", filter: "blur(100px)" }}
            />
          </div>

          <div className="relative">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border border-white/10 mx-auto"
              style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: "#60A5FA" }}
              />
              <span
                style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.55)", fontWeight: 500 }}
              >
                Demonstrações disponíveis esta semana
              </span>
            </div>

            <h2
              className="text-white mb-5"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              Pronto para organizar{" "}
              <span style={{ color: "#60A5FA" }}>seu sistema de gestão?</span>
            </h2>

            <p
              className="mx-auto mb-10"
              style={{
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.7,
                maxWidth: "480px",
                fontWeight: 400,
              }}
            >
              Conheça o SisteQ com uma demonstração personalizada para a realidade da sua empresa.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demonstracao"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-lg text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#004BA8",
                  fontWeight: 600,
                  fontSize: "1rem",
                  boxShadow: "0 12px 40px rgba(0,75,168,0.45)",
                }}
              >
                <Calendar size={18} />
                Solicitar demonstração
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/demonstracao"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-lg text-white/85 transition-all hover:text-white hover:border-white/40 border border-white/20"
                style={{ fontWeight: 500, fontSize: "1rem" }}
              >
                <MessageCircle size={18} />
                Falar com especialista
              </Link>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
              {["Sem compromisso", "Demo personalizada", "Equipe especializada"].map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full" style={{ backgroundColor: "#60A5FA" }} />
                  <span
                    style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", fontWeight: 400 }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
