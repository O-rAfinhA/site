import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  MessageCircle,
  CheckCircle2,
  Shield,
  Zap,
  Trophy,
  ChevronRight,
  Leaf,
  HardHat,
  Target,
  Users,
  Settings,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import awsLogo from "../../imports/aws.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import CheckoutButton from "../components/CheckoutButton";

export default function PlansPage() {
  return (
    <>
      <PlansHero />
      <ThreePlans />
      <AWSBanner />
      <AddNorms />
      <HowItStarts />
      <PlansFAQ />
      <PlansCTA />
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   1 · HERO
   ═══════════════════════════════════════════════════════════════ */

function PlansHero() {
  return (
    <section
      className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20"
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
            <pattern id="phg" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth=".5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#phg)" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 py-20 lg:py-28 text-center">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 border border-blue-400/25"
          style={{ backgroundColor: "rgba(0,75,168,0.12)" }}
        >
          <Trophy size={14} className="text-blue-400" />
          <span
            className="text-blue-300"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Planos
          </span>
        </div>

        <h1
          className="text-white mb-6 mx-auto"
          style={{
            fontSize: "clamp(2rem, 3.8vw, 3rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.025em",
            maxWidth: "800px",
          }}
        >
          Planos pensados para a profundidade da gestão que sua empresa precisa.
        </h1>

        <p
          className="text-white/55 mb-10 mx-auto"
          style={{
            fontSize: "1.05rem",
            fontWeight: 400,
            lineHeight: 1.75,
            maxWidth: "620px",
          }}
        >
          Você escolhe o plano pelo que sua gestão precisa controlar — não pelo número de usuários. E expande com novas normas quando fizer sentido.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
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
          <Link
            href="/demonstracao"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded text-white/80 text-sm border border-white/20 transition-all hover:border-white/40 hover:text-white"
            style={{ fontWeight: 500 }}
          >
            Falar com especialista
          </Link>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {["Gestão", "Certificação", "Obras"].map((tag) => (
            <div key={tag} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#60A5FA" }} />
              <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   2 · THREE PLANS
   ═══════════════════════════════════════════════════════════════ */

const plans = [
  {
    name: "Essencial",
    tagline: "Para começar a estruturar a gestão.",
    price: "R$ 697",
    period: "/ mês",
    icon: Shield,
    color: "#0891B2",
    bg: "rgba(8,145,178,0.06)",
    border: "rgba(8,145,178,0.15)",
    features: [
      "Gestão estratégica",
      "Plano de Ações Corretivas",
      "Indicadores de desempenho",
      "Mapeamento de processos",
      "Gestão de documentos",
      "Gestão de riscos",
      "Gestor de tarefas diárias",
      { text: "Auditoria instantânea", highlighted: true },
    ],
    footer: ["10 usuários inclusos · mais usuários sob consulta", "20 GB de armazenamento"],
    highlight: false,
  },
  {
    name: "Gestão",
    badge: "Mais escolhido",
    tagline: "Para manter a gestão certificada viva e sob controle.",
    price: "R$ 997",
    period: "/ mês",
    icon: Zap,
    color: "#004BA8",
    bg: "rgba(0,75,168,0.06)",
    border: "rgba(0,75,168,0.15)",
    features: [
      { text: "Tudo do Essencial", highlighted: true },
      "Auditorias",
      "Fornecedores",
      "Pessoas",
    ],
    footer: ["10 usuários inclusos · mais usuários sob consulta", "40 GB de armazenamento"],
    highlight: true,
  },
  {
    name: "Performance",
    tagline: "Para indústrias e operações com controle técnico.",
    price: "R$ 1.497",
    period: "/ mês",
    icon: Trophy,
    color: "#7C3AED",
    bg: "rgba(124,58,237,0.06)",
    border: "rgba(124,58,237,0.15)",
    features: [
      { text: "Tudo do Gestão", highlighted: true },
      "Calibração de instrumentos",
      "Manutenção de equipamentos",
    ],
    footer: ["10 usuários inclusos · mais usuários sob consulta", "60 GB de armazenamento"],
    highlight: false,
  },
];

function ThreePlans() {
  return (
    <section id="planos" className="pt-24 lg:pt-32 pb-16 lg:pb-20" style={{ backgroundColor: "#F8FAFC" }}>
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
            Escolha seu plano
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
            Três planos. Uma plataforma. Profundidades diferentes de gestão.
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
            Todos os planos incluem 10 usuários, atualizações contínuas e suporte. Mais usuários sob consulta.
          </p>
        </div>

        {/* Annual Plan Banner */}
        <div className="max-w-4xl mx-auto mb-12">
          <div
            className="rounded-2xl p-6 lg:p-8 text-center border-2"
            style={{
              background: "linear-gradient(135deg, rgba(0,75,168,0.05) 0%, rgba(96,165,250,0.05) 100%)",
              borderColor: "rgba(0,75,168,0.15)",
            }}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Sparkles size={24} style={{ color: "#004BA8" }} />
              <h3
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  color: "#0B1F4B",
                  lineHeight: 1.2,
                }}
              >
                Plano Anual com 15% de desconto
              </h3>
              <Sparkles size={24} style={{ color: "#004BA8" }} />
            </div>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#64748B",
                lineHeight: 1.6,
              }}
            >
              Contrate o plano anual e ganhe mais 15% de desconto sobre os valores mensais.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className="rounded-2xl border p-7 lg:p-8 flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: plan.border,
                  ...(plan.highlight && {
                    boxShadow: "0 8px 32px rgba(0,75,168,0.12)",
                  }),
                }}
              >
                {/* Highlight ribbon */}
                {plan.highlight && (
                  <div
                    className="absolute -top-px left-6 right-6 h-1 rounded-b-full"
                    style={{ backgroundColor: plan.color }}
                  />
                )}

                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: plan.bg }}
                  >
                    <Icon size={20} style={{ color: plan.color }} strokeWidth={2} />
                  </div>
                  {plan.badge && (
                    <span
                      className="px-2.5 py-1 rounded-md"
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 600,
                        color: plan.color,
                        backgroundColor: plan.bg,
                        border: `1px solid ${plan.border}`,
                      }}
                    >
                      {plan.badge}
                    </span>
                  )}
                </div>

                <h3
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    color: "#0B1F4B",
                    lineHeight: 1.3,
                    marginBottom: "0.5rem",
                  }}
                >
                  {plan.name}
                </h3>

                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#64748B",
                    lineHeight: 1.5,
                    fontWeight: 400,
                    marginBottom: "1.5rem",
                  }}
                >
                  {plan.tagline}
                </p>

                {/* Price */}
                <div className="mb-6">
                  {/* Promotion Badge */}
                  <div className="mb-2">
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md"
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        color: "#059669",
                        backgroundColor: "rgba(5,150,105,0.08)",
                        border: "1px solid rgba(5,150,105,0.2)",
                      }}
                    >
                      🎉 Promoção de lançamento - 30% OFF
                    </span>
                  </div>

                  {/* Original Price (strikethrough) */}
                  <div className="mb-1">
                    <span
                      style={{
                        fontSize: "0.85rem",
                        color: "#94A3B8",
                        fontWeight: 400,
                        textDecoration: "line-through",
                      }}
                    >
                      De R$ {plan.name === "Essencial" ? "995" : plan.name === "Gestão" ? "1.424" : "2.138"}
                    </span>
                  </div>

                  {/* Current Price */}
                  <div className="flex items-baseline gap-1">
                    <span
                      style={{
                        fontSize: "2.2rem",
                        fontWeight: 800,
                        color: plan.color,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {plan.price}
                    </span>
                    <span style={{ fontSize: "0.9rem", color: "#94A3B8", fontWeight: 400 }}>
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {plan.features.map((f, idx) => {
                    const isHighlighted = typeof f === 'object' && f.highlighted;
                    const featureText = typeof f === 'string' ? f : f.text;
                    return (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={16}
                          style={{ color: plan.color, flexShrink: 0, marginTop: "2px", opacity: 0.7 }}
                          strokeWidth={2}
                        />
                        <span
                          style={{
                            fontSize: "0.85rem",
                            color: isHighlighted ? plan.color : "#475569",
                            lineHeight: 1.5,
                            fontWeight: isHighlighted ? 600 : 450,
                          }}
                        >
                          {featureText}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* CTA + Footer - pushed to bottom */}
                <div className="mt-auto pt-6">
                  {/* CTA */}
                  <CheckoutButton
                    planName={plan.name}
                    planPrice={plan.price}
                    planColor={plan.color}
                  />

                  {/* Footer */}
                  <div
                    className="pt-4 border-t"
                    style={{ borderColor: "rgba(0,0,0,0.06)" }}
                  >
                  {plan.footer.map((line, i) => (
                    <p
                      key={i}
                      style={{
                        fontSize: "0.72rem",
                        color: "#94A3B8",
                        lineHeight: 1.5,
                        fontWeight: 400,
                      }}
                    >
                      {line}
                    </p>
                  ))}
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
   2.5 · AWS BANNER
   ═══════════════════════════════════════════════════════════════ */

function AWSBanner() {
  return (
    <section className="py-8" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          {/* AWS Logo */}
          <Image
            src={awsLogo}
            alt="Amazon Web Services"
            width={120}
            height={40}
            style={{ width: "120px", height: "auto" }}
          />

          {/* Separator */}
          <div className="hidden md:block w-px bg-gray-200" style={{ height: "48px" }} />

          {/* Text block */}
          <div className="text-center md:text-left">
            <p
              className="mb-1"
              style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                color: "#004BA8",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Infraestrutura enterprise
            </p>
            <p
              style={{
                fontSize: "0.92rem",
                color: "#334155",
                lineHeight: 1.5,
                fontWeight: 500,
              }}
            >Seus dados protegidos em servidores            <span className="font-bold">AWS da Amazon</span>, com a mesma infraestrutura de segurança utilizada por bancos, grandes empresas e órgãos governamentais.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   3 · ADD NORMS
   ═══════════════════════════════════════════════════════════════ */

const addons = [
  {
    norm: "ISO 14001",
    pretitle: "NORMA ADICIONAL",
    desc: "Estruture a gestão ambiental dentro do mesmo sistema, com aspectos, impactos, resíduos, emergências e controles operacionais.",
    price: "+ R$ 350,00 / mês",
    subtext: "soma ao plano contratado",
    icon: Leaf,
    color: "#0D7C4A",
    bg: "rgba(13,124,74,0.06)",
    border: "rgba(13,124,74,0.15)",
    href: "/solucao/iso-14001",
  },
  {
    norm: "PBQP-H",
    pretitle: "NORMA ADICIONAL",
    desc: "Leve a gestão para dentro da obra com RDO, FVS, ROO, PCTO, PDE, PQO, controle tecnológico e cronograma físico.",
    price: "+ R$ 350,00 / mês",
    subtext: "até 5 obras ativas",
    icon: HardHat,
    color: "#B45A1C",
    bg: "rgba(180,90,28,0.06)",
    border: "rgba(180,90,28,0.15)",
    href: "/solucao/pbqp-h",
  },
];

function AddNorms() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
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
            Expansões
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
            Sua empresa cresce, sua gestão acompanha.
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#64748B",
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            Adicione novas normas ao plano contratado conforme sua operação evolui. Sem trocar de plataforma.
          </p>
        </div>

        {/* Addon cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {addons.map((addon) => {
            const Icon = addon.icon;
            return (
              <div
                key={addon.norm}
                className="rounded-2xl border p-7 lg:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#FAFBFC",
                  borderColor: addon.border,
                }}
              >
                {/* Icon + Pretitle */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: addon.bg }}
                  >
                    <Icon size={18} style={{ color: addon.color }} strokeWidth={2} />
                  </div>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      color: addon.color,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {addon.pretitle}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#0B1F4B",
                    lineHeight: 1.3,
                    marginBottom: "0.75rem",
                  }}
                >
                  {addon.norm}
                </h3>

                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#64748B",
                    lineHeight: 1.65,
                    fontWeight: 400,
                    marginBottom: "1.5rem",
                  }}
                >
                  {addon.desc}
                </p>

                {/* Price */}
                <div className="mb-5">
                  <div className="flex items-baseline gap-2">
                    <span
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 800,
                        color: addon.color,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {addon.price}
                    </span>
                  </div>
                  <p style={{ fontSize: "0.72rem", color: "#94A3B8", marginTop: "2px", fontWeight: 400 }}>
                    {addon.subtext}
                  </p>
                </div>

                {/* CTA */}
                <Link
                  href={addon.href}
                  className="inline-flex items-center gap-2 text-sm transition-colors hover:opacity-80"
                  style={{ color: addon.color, fontWeight: 600 }}
                >
                  Saiba mais sobre a solução {addon.norm}
                  <ChevronRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Microcopy */}
        <p
          className="text-center mt-10"
          style={{ fontSize: "0.8rem", color: "#94A3B8", fontWeight: 400 }}
        >
          Outras normas e expansões setoriais sob consulta.
        </p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   4 · HOW IT STARTS
   ═══════════════════════════════════════════════════════════════ */

const steps = [
  {
    number: "01",
    title: "Alinhamento",
    desc: "Entendemos o momento da sua empresa, normas envolvidas e estrutura atual da gestão.",
    icon: Target,
    color: "#004BA8",
  },
  {
    number: "02",
    title: "Ativação e estruturação",
    desc: "Configuramos seu ambiente no SisteQ e organizamos a base mínima para começar a operar.",
    icon: Settings,
    color: "#0891B2",
  },
  {
    number: "03",
    title: "Treinamento da equipe",
    desc: "Capacitamos os usuários para usar a plataforma com autonomia desde o primeiro dia.",
    icon: Users,
    color: "#059669",
  },
  {
    number: "04",
    title: "Acompanhamento inicial",
    desc: "Você não fica sozinho. Acompanhamos os primeiros passos para garantir que a gestão entre no ritmo.",
    icon: Sparkles,
    color: "#7C3AED",
  },
];

function HowItStarts() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
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
            Como começa
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
            Sua entrada no SisteQ é estruturada do início ao primeiro resultado.
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#64748B",
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            Em até 30 dias sua empresa já vê a gestão funcionando — base organizada, pendências visíveis, equipe usando.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="rounded-2xl border p-7 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "rgba(0,0,0,0.06)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${step.color}10` }}
                  >
                    <Icon size={18} style={{ color: step.color }} strokeWidth={2} />
                  </div>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: step.color,
                      opacity: 0.5,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {step.number}
                  </span>
                </div>
                <h3
                  className="mb-2"
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#0B1F4B",
                    lineHeight: 1.35,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#64748B",
                    lineHeight: 1.65,
                    fontWeight: 400,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Microcopy */}
        <p
          className="text-center mt-12"
          style={{ fontSize: "0.8rem", color: "#94A3B8", fontWeight: 400 }}
        >
          A implantação é cobrada à parte do plano mensal. Valores apresentados na proposta comercial.
        </p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   5 · FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: "Tem fidelidade ou multa de cancelamento?",
    answer:
      "Não. Você pode cancelar a qualquer momento, com aviso prévio de 30 dias. Sem multa, sem letra miúda.",
  },
  {
    question: "Posso mudar de plano depois de contratar?",
    answer:
      "Sim. Você pode subir ou descer de plano a qualquer momento, conforme sua gestão evolui. O ajuste é feito sem custo de migração.",
  },
  {
    question: "Como saber qual plano é o ideal para a minha empresa?",
    answer:
      "Depende do que você precisa controlar. Empresas começando a estruturar a gestão geralmente entram no plano básico. Empresas certificadas, ou em processo de certificação, normalmente precisam dos módulos do plano intermediário. Empresas com operação técnica relevante — calibração, manutenção, produção — se beneficiam do plano completo. Na demonstração, mostramos exatamente qual faz sentido para o seu caso.",
  },
  {
    question: "O onboarding é cobrado uma vez ou todo mês?",
    answer:
      "Cobrança única, no início. Depois disso você paga apenas a mensalidade do plano escolhido. O onboarding inclui ativação, estruturação inicial, treinamento da equipe e acompanhamento dos primeiros passos.",
  },
  {
    question: "O que acontece se a minha empresa crescer e precisar adicionar novas normas?",
    answer:
      "Você não precisa trocar de plataforma. O SisteQ tem expansões para ISO 14001, PBQP-H e outras normas que se adicionam ao seu plano atual, sem refazer nada do que já está estruturado.",
  },
  {
    question: "Quanto tempo leva para o sistema sair do papel?",
    answer:
      "Em até 30 dias após o início do onboarding, sua empresa já vê a gestão funcionando — base organizada, pendências visíveis, equipe usando. Não é projeto de longo prazo até gerar valor.",
  },
  {
    question: "Os dados que eu colocar no SisteQ são meus?",
    answer:
      "Sim. Os dados são da sua empresa, sempre. Em caso de cancelamento, você pode exportar tudo. Não trabalhamos com modelo de 'refém de plataforma'.",
  },
  {
    question: "Como faço para contratar?",
    answer:
      "Comece pela demonstração de 30 minutos. Mostramos a plataforma, entendemos a realidade da sua empresa e indicamos o plano adequado. Depois disso, você recebe a proposta para análise sem pressão.",
  },
];

function PlansFAQ() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="mb-4"
            style={{
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#004BA8",
              textTransform: "uppercase",
            }}
          >
            Perguntas Frequentes
          </p>
          <h2
            className="mb-4"
            style={{
              fontSize: "clamp(1.85rem, 3.2vw, 2.7rem)",
              fontWeight: 700,
              color: "#0B1F4B",
              lineHeight: 1.2,
              letterSpacing: "-0.025em",
            }}
          >
            Dúvidas sobre nossos planos
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#64748B",
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            Tudo o que você precisa saber antes de escolher.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-2xl border p-2" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-0"
              >
                <AccordionTrigger
                  className="px-6 py-5 hover:no-underline hover:bg-gray-50 rounded-lg transition-colors"
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    color: "#0B1F4B",
                    textAlign: "left",
                    lineHeight: 1.4,
                  }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  className="px-6 pb-5 pt-0"
                  style={{
                    fontSize: "0.9375rem",
                    color: "#64748B",
                    lineHeight: 1.65,
                    fontWeight: 400,
                  }}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Footer Link */}
        <div className="text-center mt-10">
          <Link
            href="/demonstracao"
            className="inline-flex items-center gap-2 transition-all hover:gap-3"
            style={{
              fontSize: "0.9375rem",
              fontWeight: 500,
              color: "#004BA8",
            }}
          >
            Não encontrou sua dúvida? Fale com especialista
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   6 · CTA FINAL
   ═══════════════════════════════════════════════════════════════ */

function PlansCTA() {
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
                PRONTO PARA COMEÇAR?
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
              Veja o SisteQ aplicado à{" "}
              <span style={{ color: "#60A5FA" }}>realidade da sua empresa.</span>
            </h2>

            <p
              className="mx-auto mb-10"
              style={{
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.7,
                maxWidth: "520px",
                fontWeight: 400,
              }}
            >
              Em uma demonstração de 30 minutos, mostramos como o plano certo se encaixa na sua gestão.
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
              {["Sem compromisso", "Demonstração personalizada", "Equipe especializada"].map((text) => (
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
