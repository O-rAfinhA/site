import Link from "next/link";
import {
  Handshake,
  Gift,
  TrendingUp,
  Shield,
  Users,
  CheckCircle2,
  ArrowRight,
  Target,
  BookOpen,
  Award,
  Leaf,
  HardHat,
  FileCheck,
  ChevronRight,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export default function PartnersPage() {
  return (
    <>
      <PartnersHero />
      <WhyPartner />
      <PartnershipModels />
      <HowItWorks />
      <IdealFor />
      <PartnersFAQ />
      <PartnersCTA />
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   1 · HERO
   ═══════════════════════════════════════════════════════════════ */

function PartnersHero() {
  return (
    <section
      className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20"
      style={{ backgroundColor: "#0B1F4B" }}
    >
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
            <pattern id="ph" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth=".5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ph)" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 py-20 lg:py-28 text-center">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 border border-blue-400/25"
          style={{ backgroundColor: "rgba(0,75,168,0.12)" }}
        >
          <Handshake size={14} className="text-blue-400" />
          <span
            className="text-blue-300"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Programa de Parceiros
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
        >
          Cresça com o SisteQ
        </h1>

        <p
          className="text-white/55 mb-10 max-w-3xl mx-auto"
          style={{
            fontSize: "1.05rem",
            fontWeight: 400,
            lineHeight: 1.75,
          }}
        >
          Consultorias, consultores e indicadores que querem entregar mais valor para seus
          clientes encontram no SisteQ uma plataforma estruturada e um modelo de parceria claro.
        </p>

        <Link
          href="/parceiros/cadastro"
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded text-white text-sm transition-all hover:opacity-90 hover:-translate-y-0.5"
          style={{
            backgroundColor: "#004BA8",
            fontWeight: 600,
            boxShadow: "0 8px 24px rgba(0,75,168,0.45)",
          }}
        >
          Quero ser parceiro
          <ArrowRight size={16} />
        </Link>

        {/* Trust signals */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 mt-8">
          <div className="flex items-center gap-2">
            <TrendingUp size={18} style={{ color: "#10B981" }} />
            <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "rgba(255,255,255,0.9)" }}>
              Comissão recorrente
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Shield size={18} style={{ color: "#10B981" }} />
            <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "rgba(255,255,255,0.9)" }}>
              Suporte dedicado
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Users size={18} style={{ color: "#10B981" }} />
            <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "rgba(255,255,255,0.9)" }}>
              Treinamento completo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   2 · WHY PARTNER
   ═══════════════════════════════════════════════════════════════ */

const whyPartnerCards = [
  {
    icon: Shield,
    title: "Plataforma pronta",
    desc: "Sem precisar desenvolver sistema próprio. Você usa o SisteQ com sua metodologia e marca.",
    color: "#004BA8",
    bg: "rgba(0,75,168,0.06)",
  },
  {
    icon: TrendingUp,
    title: "Comissão recorrente",
    desc: "Modelo comercial transparente com comissionamento mensal para parceiro implantador.",
    color: "#059669",
    bg: "rgba(5,150,105,0.06)",
  },
  {
    icon: Users,
    title: "Independência total",
    desc: "Você mantém sua identidade e metodologia. O SisteQ é a plataforma, você é o especialista.",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.06)",
  },
  {
    icon: Target,
    title: "Apoio comercial",
    desc: "Materiais de apresentação, treinamento na plataforma e suporte para suas vendas.",
    color: "#D97706",
    bg: "rgba(217,119,6,0.06)",
  },
];

function WhyPartner() {
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
            Vantagens
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
            Por que ser parceiro do SisteQ
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyPartnerCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="rounded-2xl border p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "rgba(0,0,0,0.06)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: card.bg }}
                >
                  <Icon size={22} style={{ color: card.color }} strokeWidth={1.8} />
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
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#64748B",
                    lineHeight: 1.65,
                    fontWeight: 400,
                  }}
                >
                  {card.desc}
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
   3 · PARTNERSHIP MODELS
   ═══════════════════════════════════════════════════════════════ */

const models = [
  {
    type: "Parceiro Implantador",
    icon: Handshake,
    forWho: "Para quem",
    forWhoDesc: "Consultorias e consultores que vendem, implantam e acompanham clientes.",
    howWorks: "Como funciona",
    howWorksDesc:
      "Você cobra a consultoria diretamente do cliente. O SisteQ paga comissão sobre a mensalidade da plataforma.",
    remuneration: "Remuneração no fechamento + 24 meses de comissionamento",
    extraBenefit:
      "Acesso gratuito ao sistema de gestão de projetos de consultoria, onde você passa a gerenciar todos seus clientes, sejam usuários do SisteQ ou não.",
    cta: "Quero ser implantador",
    color: "#004BA8",
    bg: "rgba(0,75,168,0.06)",
    border: "rgba(0,75,168,0.15)",
  },
  {
    type: "Parceiro Indicador",
    icon: Gift,
    forWho: "Para quem",
    forWhoDesc:
      "Profissionais ou empresas que querem somente indicar leads sem participar da implantação.",
    howWorks: "Como funciona",
    howWorksDesc:
      "Você indica o lead, o SisteQ cuida da venda, implantação e acompanhamento.",
    remuneration: "Remuneração fixa por cliente indicado",
    extraBenefit: null,
    cta: "Quero ser indicador",
    color: "#059669",
    bg: "rgba(5,150,105,0.06)",
    border: "rgba(5,150,105,0.15)",
  },
];

function PartnershipModels() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#F8FAFC" }}>
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
            Modelos de parceria
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
            Escolha o modelo que faz sentido para você
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {models.map((model) => {
            const Icon = model.icon;
            return (
              <div
                key={model.type}
                className="rounded-2xl border p-8 lg:p-10 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: model.border,
                }}
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: model.bg }}
                  >
                    <Icon size={26} style={{ color: model.color }} strokeWidth={2} />
                  </div>
                  <h3
                    style={{
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      color: "#0B1F4B",
                      lineHeight: 1.2,
                    }}
                  >
                    {model.type}
                  </h3>
                </div>

                {/* For Who */}
                <div className="mb-5">
                  <h4
                    className="mb-2"
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: model.color,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {model.forWho}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#475569",
                      lineHeight: 1.6,
                      fontWeight: 400,
                    }}
                  >
                    {model.forWhoDesc}
                  </p>
                </div>

                {/* How Works */}
                <div className="mb-5">
                  <h4
                    className="mb-2"
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: model.color,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {model.howWorks}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#475569",
                      lineHeight: 1.6,
                      fontWeight: 400,
                    }}
                  >
                    {model.howWorksDesc}
                  </p>
                </div>

                {/* Remuneration */}
                <div
                  className="rounded-xl p-4 mb-5"
                  style={{ backgroundColor: model.bg, border: `1px solid ${model.border}` }}
                >
                  <p
                    style={{
                      fontSize: "0.92rem",
                      color: "#0B1F4B",
                      lineHeight: 1.5,
                      fontWeight: 600,
                    }}
                  >
                    {model.remuneration}
                  </p>
                </div>

                {/* Extra Benefit */}
                {model.extraBenefit && (
                  <div className="mb-6 flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      style={{ color: model.color, flexShrink: 0, marginTop: "2px" }}
                      strokeWidth={2}
                    />
                    <p
                      style={{
                        fontSize: "0.88rem",
                        color: "#475569",
                        lineHeight: 1.6,
                        fontWeight: 400,
                      }}
                    >
                      <strong style={{ color: "#0B1F4B" }}>Benefício extra:</strong>{" "}
                      {model.extraBenefit}
                    </p>
                  </div>
                )}

                {/* CTA */}
                <Link
                  href="/parceiros/cadastro"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-lg text-sm text-white transition-all hover:opacity-90 mt-auto"
                  style={{ backgroundColor: model.color, fontWeight: 600 }}
                >
                  {model.cta}
                  <ChevronRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   4 · HOW IT WORKS
   ═══════════════════════════════════════════════════════════════ */

const steps = [
  {
    number: "1",
    title: "Cadastro e alinhamento",
    desc: "Você preenche o cadastro e agendamos uma conversa para entender seu perfil e objetivos.",
  },
  {
    number: "2",
    title: "Treinamento na plataforma",
    desc: "Você recebe acesso completo ao SisteQ e passa por um treinamento estruturado.",
  },
  {
    number: "3",
    title: "Apresentação para seus clientes",
    desc: "Com materiais de apoio e conhecimento da plataforma, você começa a apresentar para seus clientes.",
  },
  {
    number: "4",
    title: "Acompanhamento contínuo e comissão",
    desc: "A cada cliente fechado, você recebe comissionamento e tem suporte contínuo do time SisteQ.",
  },
];

function HowItWorks() {
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
            Processo
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
            Como funciona a parceria
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border p-7 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              style={{
                backgroundColor: "#FAFBFC",
                borderColor: "rgba(0,0,0,0.06)",
              }}
            >
              <div
                className="absolute -top-4 left-6 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#004BA8" }}
              >
                <span
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#FFFFFF",
                  }}
                >
                  {step.number}
                </span>
              </div>

              <h3
                className="mb-3 mt-2"
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
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   5 · IDEAL FOR
   ═══════════════════════════════════════════════════════════════ */

const profiles = [
  { icon: Shield, label: "Consultorias ISO", color: "#004BA8" },
  { icon: Award, label: "Auditores de Certificação", color: "#D97706" },
  { icon: Users, label: "Consultores Independentes", color: "#059669" },
];

function IdealFor() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#F8FAFC" }}>
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
            Perfis ideais
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
            Para quem o programa de parceiros é ideal
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-4xl mx-auto">
          {profiles.map((profile) => {
            const Icon = profile.icon;
            return (
              <div
                key={profile.label}
                className="flex items-center gap-4 rounded-xl border p-5 transition-all duration-300 hover:shadow-md"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "rgba(0,0,0,0.06)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${profile.color}10` }}
                >
                  <Icon size={20} style={{ color: profile.color }} strokeWidth={2} />
                </div>
                <span
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "#0B1F4B",
                    lineHeight: 1.3,
                  }}
                >
                  {profile.label}
                </span>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p
            style={{
              fontSize: "0.95rem",
              color: "#64748B",
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            Profissionais que atuam com empresas também podem indicar o SisteQ e receber comissão por oportunidades qualificadas.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   6 · FAQ
   ═══════════════════════════════════════════════════════════════ */

const partnersFaqs = [
  {
    question: "Como funciona a remuneração do parceiro?",
    answer:
      "Existem dois modelos. O Parceiro Implantador, que vende, implanta e acompanha o cliente, recebe um valor fixo no fechamento mais comissão recorrente sobre a mensalidade. O Parceiro Indicador, que apenas indica o lead, recebe um valor fixo por cliente fechado. Os valores específicos são apresentados na conversa de adesão ao programa.",
  },
  {
    question: "Posso atuar como implantador e indicador ao mesmo tempo?",
    answer:
      "Sim. Você define o modelo conforme o cliente. Em alguns casos faz sentido implantar e acompanhar, em outros apenas indicar. Cada relação tem sua própria regra de comissão.",
  },
  {
    question: "Preciso pagar alguma taxa para entrar no programa?",
    answer:
      "Não. Não há taxa de adesão nem mensalidade obrigatória para parceiros. O Parceiro Implantador ainda tem benefícios adicionais conforme constrói sua carteira de clientes na plataforma.",
  },
  {
    question: "Tenho exclusividade na minha região?",
    answer:
      "Não trabalhamos com exclusividade geográfica. Isso seria limitante para o mercado e injusto com outros parceiros qualificados. O que protegemos é a relação com o cliente: nenhum lead que você cadastrar pode ser abordado por outro canal.",
  },
  {
    question: "Como o SisteQ protege o cliente que eu trouxer?",
    answer:
      "Toda indicação registrada antes da negociação avançar fica vinculada a você. O cliente do parceiro implantador não é abordado pelo time do SisteQ para serviços de consultoria. A relação técnica e comercial é sua.",
  },
  {
    question: "Posso usar o SisteQ na minha própria consultoria?",
    answer:
      "Sim. O Parceiro Implantador pode usar a plataforma para gerenciar a carteira de clientes da consultoria, com benefícios progressivos conforme sua atuação no programa.",
  },
  {
    question: "Que tipo de treinamento e suporte eu recebo?",
    answer:
      "Treinamento completo na plataforma, materiais de apresentação para usar com seus clientes, acesso ao time técnico para suporte e atualizações contínuas conforme novas funcionalidades são lançadas.",
  },
  {
    question: "Quantos clientes preciso ter para começar?",
    answer:
      "Nenhum. Você pode começar do zero. O programa é estruturado para crescer junto com você — sem metas de entrada nem volume mínimo.",
  },
  {
    question: "Como faço para me tornar parceiro?",
    answer:
      "Preencha o cadastro de parceiro e nossa equipe entra em contato para alinhar perfil, modelo de atuação e próximos passos. O processo é rápido e sem complicação.",
  },
];

function PartnersFAQ() {
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
            Sobre o programa de parceiros
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#64748B",
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            As dúvidas mais comuns de quem está avaliando entrar.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-2xl border p-2" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
          <Accordion type="single" collapsible className="w-full">
            {partnersFaqs.map((faq, index) => (
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
            href="/parceiros/cadastro"
            className="inline-flex items-center gap-2 transition-all hover:gap-3"
            style={{
              fontSize: "0.9375rem",
              fontWeight: 500,
              color: "#004BA8",
            }}
          >
            Tem outras dúvidas? Falar com a equipe de parcerias
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   7 · CTA FINAL
   ═══════════════════════════════════════════════════════════════ */

function PartnersCTA() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#FFFFFF" }}>
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
            <h2
              className="text-white mb-5"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              Pronto para crescer{" "}
              <span style={{ color: "#60A5FA" }}>com o SisteQ?</span>
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
              Converse com nosso time comercial e descubra como a parceria pode fortalecer
              sua operação.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/parceiros/cadastro"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-lg text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#004BA8",
                  fontWeight: 600,
                  fontSize: "1rem",
                  boxShadow: "0 12px 40px rgba(0,75,168,0.45)",
                }}
              >
                Quero ser parceiro
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/demonstracao"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-lg text-white/85 transition-all hover:text-white hover:border-white/40 border border-white/20"
                style={{ fontWeight: 500, fontSize: "1rem" }}
              >
                Falar com a equipe comercial
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
