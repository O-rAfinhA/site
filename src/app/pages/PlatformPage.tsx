import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  MessageCircle,
  Target,
  Shield,
  Wrench,
  Users,
  CheckCircle2,
  Eye,
  CheckSquare,
  Zap,
  TrendingUp,
  AlertCircle,
  Clock,
  BarChart3,
  FileText,
  Settings,
  Briefcase,
  ChevronRight,
  Award,
} from "lucide-react";

import heroImg from "../../imports/01_hero_dashboard_estrategico.png";
import auditImg from "../../imports/02_auditoria_modulos_meio.png";
import indicatorsImg from "../../imports/03_dashboard_indicadores.png";
import ambientalImg from "../../imports/04_dashboard_ambiental.png";
import obrasImg from "../../imports/05_dashboard_obras.png";
import awsLogo from "../../imports/aws.png";

export default function PlatformPage() {
  return (
    <>
      <PlatformHero />
      <FourCores />
      <InstantAudit />
      <AllConnected />
      <AutomatedRoutines />
      <TechnicalDepth />
      <AWSInfraBanner />
      <AdaptableStructure />
      <WhyDifferent />
      <PlatformCTA />
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   1 · HERO
   ═══════════════════════════════════════════════════════════════ */

function PlatformHero() {
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
            <pattern id="plhg" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth=".5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#plhg)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        {/* Top — Centered Content */}
        <div className="max-w-4xl mx-auto text-center mb-16" style={{ width: "70%" }}>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 border border-blue-400/25"
            style={{ backgroundColor: "rgba(0,75,168,0.12)" }}
          >
            <Target size={14} className="text-blue-400" />
            <span
              className="text-blue-300"
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              A Plataforma
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
            Uma plataforma para colocar a gestão para funcionar.
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
            Gestão integrada feita para a rotina real da sua empresa. Estratégia, conformidade, operação técnica e apoio consultivo em um único sistema.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              href="/planos"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded text-white/80 text-sm border border-white/20 transition-all hover:border-white/40 hover:text-white"
              style={{ fontWeight: 500 }}
            >
              Ver planos
            </Link>
          </div>
        </div>

        {/* Bottom — Hero Image */}
        <div className="mx-auto" style={{ width: "90%" }}>
          <Image
            src={heroImg}
            alt="Dashboard Estratégico do SisteQ"
            width={1600}
            height={900}
            priority
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   2 · FOUR CORES
   ═══════════════════════════════════════════════════════════════ */

const cores = [
  {
    icon: Target,
    name: "Estratégico",
    desc: "Onde a empresa define objetivos, acompanha resultados e transforma planejamento em execução.",
    modules:
      "Gestão estratégica • Contexto da organização • Partes interessadas • SWOT • Objetivos e metas • Processos • Indicadores • Riscos e oportunidades • Planos de ação • Análise crítica da direção",
    color: "#004BA8",
    bg: "rgba(0,75,168,0.06)",
  },
  {
    icon: Shield,
    name: "Conformidade e Controle",
    desc: "Onde o sistema de gestão fica organizado, rastreável e vivo entre auditorias.",
    modules:
      "Documentos • Controle de versões • Auditorias internas e externas • Não conformidades • Ações corretivas • Pessoas e competências • Treinamentos • Fornecedores • Evidências e registros",
    color: "#059669",
    bg: "rgba(5,150,105,0.06)",
  },
  {
    icon: Wrench,
    name: "Técnico-Operacional",
    desc: "Onde os controles técnicos e operacionais saem da planilha e entram na rotina da empresa.",
    modules:
      "Manutenção • Calibração • Equipamentos • Planos preventivos • Gestão ambiental • Aspectos e impactos • Requisitos legais • Obras • RDO • FVS • ROO • PCTO • PQO • Controle tecnológico",
    color: "#B45A1C",
    bg: "rgba(180,90,28,0.06)",
  },
  {
    icon: Briefcase,
    name: "Apoio Consultivo",
    desc: "Onde consultorias e parceiros acompanham clientes, projetos e oportunidades com mais organização.",
    modules: "Central do Consultor • Carteira de clientes • Acompanhamento de projetos • Gestão de indicações • Painel de clientes • Metodologia de implantação • Pendências por cliente",
    color: "#7C3AED",
    bg: "rgba(124,58,237,0.06)",
  },
];

function FourCores() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
            Arquitetura
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
            A plataforma é organizada em 4 núcleos integrados.
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#64748B",
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            Cada núcleo cobre uma camada da gestão. Juntos, formam o sistema completo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {cores.map((core) => {
            const Icon = core.icon;
            return (
              <div
                key={core.name}
                className="rounded-2xl border p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{
                  backgroundColor: "#FAFBFC",
                  borderColor: "rgba(0,0,0,0.06)",
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: core.bg }}
                  >
                    <Icon size={22} style={{ color: core.color }} strokeWidth={2} />
                  </div>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "#0B1F4B",
                      lineHeight: 1.3,
                    }}
                  >
                    {core.name}
                  </h3>
                </div>
                <p
                  className="mb-4"
                  style={{
                    fontSize: "0.9rem",
                    color: "#64748B",
                    lineHeight: 1.6,
                    fontWeight: 400,
                  }}
                >
                  {core.desc}
                </p>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "#94A3B8",
                    lineHeight: 1.65,
                    fontWeight: 400,
                  }}
                >
                  {core.modules}
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
   3 · INSTANT AUDIT
   ═══════════════════════════════════════════════════════════════ */

function InstantAudit() {
  const valuePoints = [
    {
      icon: Eye,
      title: "Pendências em única tela",
      desc: "Todos os módulos em um só lugar.",
      color: "#004BA8",
    },
    {
      icon: CheckSquare,
      title: "Status atualizado em tempo real",
      desc: "Sem precisar montar relatório manual.",
      color: "#059669",
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
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ backgroundColor: "#0B1F4B" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ backgroundColor: "#60A5FA", filter: "blur(120px)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-8"
          style={{ backgroundColor: "#F59E0B", filter: "blur(100px)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 border border-orange-400/25"
            style={{ backgroundColor: "rgba(245,158,11,0.15)" }}
          >
            <Zap size={14} className="text-orange-400" />
            <span
              className="text-orange-300 text-xs"
              style={{ fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}
            >
              Conceito Exclusivo
            </span>
          </div>

          <h2
            className="text-white mb-5"
            style={{
              fontSize: "clamp(1.85rem, 3.2vw, 2.7rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "-0.025em",
            }}
          >
            Você vê o estado real da gestão antes de qualquer auditoria.
          </h2>

          <p
            className="text-white/55 mb-12"
            style={{
              fontSize: "1.05rem",
              fontWeight: 400,
              lineHeight: 1.75,
              maxWidth: "680px",
              margin: "0 auto 3rem",
            }}
          >
            O SisteQ mostra pendências, atrasos, documentos vencidos, ações abertas, auditorias em andamento e rotinas não executadas antes que esses problemas apareçam na auditoria formal.
          </p>

          <div className="mb-12" style={{ maxWidth: "65%", margin: "0 auto 3rem" }}>
            <Image
              src={auditImg}
              alt="Painel de Auditoria Instantânea"
              width={1400}
              height={900}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

          {/* Value points */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {valuePoints.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className="text-center">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${point.color}15` }}
                  >
                    <Icon size={20} style={{ color: point.color }} strokeWidth={2} />
                  </div>
                  <h3
                    className="mb-2"
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "#FFFFFF",
                      lineHeight: 1.3,
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
              );
            })}
          </div>

          {/* Closing statement */}
          <div
            className="rounded-xl px-8 py-5 max-w-2xl mx-auto"
            style={{
              backgroundColor: "rgba(245,158,11,0.08)",
              border: "1px solid rgba(245,158,11,0.2)",
            }}
          >
            <p
              style={{
                fontSize: "1.15rem",
                color: "#FCD34D",
                fontWeight: 600,
                lineHeight: 1.5,
              }}
            >
              Não é o que sua norma exige. É o que sua gestão precisa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   4 · ALL CONNECTED
   ═══════════════════════════════════════════════════════════════ */

const connections = [
  {
    icon: AlertCircle,
    text: "Uma não conformidade de auditoria vira automaticamente uma ação corretiva, com responsável e prazo.",
    color: "#DC2626",
  },
  {
    icon: Users,
    text: "Um treinamento concluído atualiza a matriz de qualificação do colaborador.",
    color: "#059669",
  },
  {
    icon: Wrench,
    text: "Um instrumento fora do prazo de calibração gera alerta e bloqueia uso até regularização.",
    color: "#D97706",
  },
  {
    icon: CheckCircle2,
    text: "Uma FVS de obra alimenta o histórico de qualidade do fornecedor de serviço.",
    color: "#7C3AED",
  },
];

function AllConnected() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#F8FAFC" }}>
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
            Integração Real
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
            Um módulo conversa com o outro. Sempre.
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#64748B",
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            Sua não conformidade vira ação. Sua ação vira tarefa. Sua tarefa vira evidência. E
            tudo aparece na auditoria.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Left — Examples */}
          <div className="grid sm:grid-cols-1 gap-5">
            {connections.map((conn, i) => {
              const Icon = conn.icon;
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 p-6 rounded-xl border transition-all duration-300 hover:shadow-md"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "rgba(0,0,0,0.06)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${conn.color}10` }}
                  >
                    <Icon size={20} style={{ color: conn.color }} strokeWidth={2} />
                  </div>
                  <p
                    style={{
                      fontSize: "0.92rem",
                      color: "#475569",
                      lineHeight: 1.6,
                      fontWeight: 400,
                    }}
                  >
                    {conn.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right — Image */}
          <div>
            <Image
              src={indicatorsImg}
              alt="Dashboard de Indicadores"
              width={1400}
              height={900}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   5 · AUTOMATED ROUTINES
   ═══════════════════════════════════════════════════════════════ */

const automations = [
  {
    icon: Wrench,
    text: "Calibração de instrumento gera tarefa antes do vencimento",
    color: "#D97706",
  },
  {
    icon: BarChart3,
    text: "Avaliação periódica de fornecedor é disparada automaticamente",
    color: "#059669",
  },
  {
    icon: FileText,
    text: "Renovação de documento controlado avisa o responsável antes do prazo",
    color: "#004BA8",
  },
];

function AutomatedRoutines() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">
          {/* Left — Content */}
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
              Plataforma Viva
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
              A plataforma trabalha mesmo quando você não está olhando.
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
              Tarefas recorrentes, alertas de vencimento e rotinas críticas acontecem
              automaticamente — sem depender de alguém lembrar.
            </p>

            <div className="space-y-4">
              {automations.map((auto, i) => {
                const Icon = auto.icon;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${auto.color}10` }}
                    >
                      <Icon size={18} style={{ color: auto.color }} strokeWidth={2} />
                    </div>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: "#475569",
                        lineHeight: 1.6,
                        fontWeight: 500,
                        paddingTop: "4px",
                      }}
                    >
                      {auto.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — Image */}
          <div>
            <Image
              src={ambientalImg}
              alt="Dashboard Ambiental"
              width={1400}
              height={900}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   6 · TECHNICAL DEPTH
   ═══════════════════════════════════════════════════════════════ */

function TechnicalDepth() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
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
            Profundidade Técnica
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
            Controle real da operação.
          </h2>
          <p
            className="mb-6"
            style={{
              fontSize: "1.05rem",
              color: "#64748B",
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            Obras, calibração, manutenção e gestão ambiental fazem parte da estrutura nativa do SisteQ, não como planilhas anexadas ou controles paralelos.
          </p>
          <p
            style={{
              fontSize: "0.95rem",
              color: "#64748B",
              lineHeight: 1.75,
              fontWeight: 400,
              maxWidth: "720px",
              margin: "0 auto",
            }}
          >
            Empresas com operação técnica precisam controlar equipamentos, instrumentos, planos preventivos, calibrações, aspectos ambientais, inspeções, ocorrências e evidências da execução. No SisteQ, esses controles ficam integrados à gestão e junto com documentos, ações, riscos, indicadores e auditorias.
          </p>
        </div>

        {/* Image */}
        <div className="mb-12" style={{ maxWidth: "65%", margin: "0 auto 3rem" }}>
          <Image
            src={obrasImg}
            alt="Dashboard de Obras"
            width={1400}
            height={900}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>

        {/* Closing statement */}
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-xl px-8 py-5"
            style={{
              backgroundColor: "rgba(0,75,168,0.06)",
              border: "1px solid rgba(0,75,168,0.15)",
            }}
          >
            <p
              className="text-center"
              style={{
                fontSize: "1.15rem",
                color: "#004BA8",
                fontWeight: 600,
                lineHeight: 1.5,
              }}
            >
              A maioria dos sistemas de SGQ não foi feito para a operação técnica. O SisteQ foi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   6.5 · AWS INFRASTRUCTURE BANNER
   ═══════════════════════════════════════════════════════════════ */

function AWSInfraBanner() {
  return (
    <section className="py-12" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          {/* AWS Logo */}
          <Image
            src={awsLogo}
            alt="Amazon Web Services"
            width={80}
            height={26}
            style={{ width: "80px", height: "auto" }}
          />

          {/* Separator */}
          <div className="hidden md:block w-px bg-gray-200" style={{ height: "48px" }} />

          {/* Text block */}
          <div className="text-center md:text-left">
            <p
              className="mb-1"
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "#6B7280",
                letterSpacing: "0.08em",
              }}
            >
              INFRAESTRUTURA
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "#374151",
                lineHeight: 1.6,
                fontWeight: 500,
                maxWidth: "48rem",
              }}
            >
              O SisteQ roda na Amazon Web Services, a mesma infraestrutura de nuvem usada pelas maiores plataformas do mundo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   7 · GROWS WITH COMPANY
   ═══════════════════════════════════════════════════════════════ */

const roadmapMilestones = [
  {
    status: "available",
    label: "Disponível Hoje",
    items: "ISO 9001 • ISO 14001 • PBQP-H",
    color: "#059669",
    bg: "rgba(5,150,105,0.1)",
  },
  {
    status: "development",
    label: "Em Desenvolvimento",
    items: "ISO 45001 • ISO 27001",
    color: "#D97706",
    bg: "rgba(217,119,6,0.1)",
  },
  {
    status: "planned",
    label: "Planejado",
    items: "ISO 37001 • ISO 37301 • Novas verticais setoriais",
    color: "#6366F1",
    bg: "rgba(99,102,241,0.1)",
  },
];

function GrowsWithCompany() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
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
            Expansão
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
            Sua gestão amadurece, sua plataforma acompanha.
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#64748B",
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            Hoje cobrimos ISO 9001, ISO 14001 e PBQP-H. Em desenvolvimento, ISO 45001, ISO 27001 e
            novas verticais. O cliente do SisteQ não troca de plataforma quando expande sua
            certificação — apenas adiciona a norma ao plano contratado.
          </p>
        </div>

        {/* Premium Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline connector line */}
          <div
            className="hidden lg:block absolute top-16 left-0 right-0 h-0.5"
            style={{
              background: "linear-gradient(to right, #059669 0%, #059669 33%, #D97706 33%, #D97706 66%, #6366F1 66%, #6366F1 100%)",
              opacity: 0.2,
            }}
          />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {roadmapMilestones.map((milestone, idx) => (
              <div key={milestone.label} className="relative">
                {/* Status indicator */}
                <div className="flex justify-center mb-6">
                  <div
                    className="relative w-14 h-14 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: `3px solid ${milestone.color}`,
                      boxShadow: `0 0 0 4px ${milestone.color}15, 0 8px 16px rgba(0,0,0,0.08)`,
                    }}
                  >
                    <div
                      className="w-6 h-6 rounded-full"
                      style={{
                        backgroundColor: milestone.color,
                        boxShadow: `0 2px 8px ${milestone.color}50`,
                      }}
                    />
                    {milestone.status === "available" && (
                      <div
                        className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: milestone.color }}
                      >
                        <CheckCircle2 size={12} color="#FFFFFF" strokeWidth={3} />
                      </div>
                    )}
                    {milestone.status === "development" && (
                      <div
                        className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: milestone.color }}
                      >
                        <Settings size={11} color="#FFFFFF" strokeWidth={2.5} className="animate-spin" style={{ animationDuration: "3s" }} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Content card */}
                <div
                  className="rounded-2xl p-7 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(135deg, ${milestone.color}03 0%, #FFFFFF 100%)`,
                    border: `1px solid ${milestone.color}20`,
                  }}
                >
                  <div
                    className="inline-flex px-4 py-2 rounded-full mb-5"
                    style={{
                      background: `linear-gradient(135deg, ${milestone.color}20 0%, ${milestone.color}10 100%)`,
                      border: `1px solid ${milestone.color}30`,
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        color: milestone.color,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {milestone.label}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "#0B1F4B",
                      lineHeight: 1.7,
                      fontWeight: 600,
                    }}
                  >
                    {milestone.items}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   8 · ADAPTABLE STRUCTURE
   ═══════════════════════════════════════════════════════════════ */

const structures = [
  {
    icon: Users,
    title: "Empresa com equipe própria",
    desc: "Sua equipe de qualidade opera com autonomia total na plataforma.",
    color: "#004BA8",
    bg: "rgba(0,75,168,0.06)",
  },
  {
    icon: Briefcase,
    title: "Empresa com consultoria externa",
    desc: "O consultor opera junto, com acessos próprios e ambiente de trabalho dedicado.",
    color: "#059669",
    bg: "rgba(5,150,105,0.06)",
  },
  {
    icon: Settings,
    title: "Modelo misto",
    desc: "Consultoria estratégica e equipe interna operacional dividem responsabilidades dentro do mesmo sistema.",
    color: "#7C3AED",
    bg: "rgba(124,58,237,0.06)",
  },
];

function AdaptableStructure() {
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
            Independência
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
            Funciona com sua consultoria, sua equipe ou ambos.
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#64748B",
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            O SisteQ não impõe metodologia nem força um único caminho. Cada empresa configura a
            plataforma à sua realidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {structures.map((struct) => {
            const Icon = struct.icon;
            return (
              <div
                key={struct.title}
                className="rounded-2xl border p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#FAFBFC",
                  borderColor: "rgba(0,0,0,0.06)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: struct.bg }}
                >
                  <Icon size={22} style={{ color: struct.color }} strokeWidth={2} />
                </div>
                <h3
                  className="mb-3"
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "#0B1F4B",
                    lineHeight: 1.3,
                  }}
                >
                  {struct.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "#64748B",
                    lineHeight: 1.65,
                    fontWeight: 400,
                  }}
                >
                  {struct.desc}
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
   9 · WHY DIFFERENT
   ═══════════════════════════════════════════════════════════════ */

const comparisonRows = [
  {
    other: "Software de qualidade focado em documentos",
    sisteq: "Plataforma que cobre estratégia, conformidade e operação técnica",
  },
  {
    other: "Plano único que obriga a contratar mais do que precisa",
    sisteq: "Planos por profundidade, com expansão por norma quando fizer sentido",
  },
  {
    other: "Sistema enterprise pesado e caro",
    sisteq: "Implantação em 30 dias, sem complexidade desnecessária",
  },
  {
    other: "Plataforma vinculada a uma única consultoria",
    sisteq: "Funciona com qualquer parceiro ou equipe própria",
  },
  {
    other: "Módulos soltos sem integração real",
    sisteq: "Integração real entre todos os módulos",
  },
];

function WhyDifferent() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
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
            Posicionamento
          </p>
          <h2
            className="mb-5"
            style={{
              fontSize: "clamp(1.85rem, 3.2vw, 2.7rem)",
              fontWeight: 700,
              color: "#0B1F4B",
              lineHeight: 1.2,
              letterSpacing: "-0.025em",
            }}
          >
            Por que o SisteQ é diferente das outras abordagens.
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#64748B",
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            A maioria das plataformas de gestão tem alguma limitação fundamental. O SisteQ foi
            desenhado para resolver cada uma delas.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="max-w-5xl mx-auto space-y-5">
          {comparisonRows.map((row, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row"
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                minHeight: "100px",
              }}
            >
              {/* Left Area - Other Approaches */}
              <div
                className="md:w-[40%]"
                style={{
                  backgroundColor: "#F9FAFB",
                  padding: "24px",
                  borderTopLeftRadius: "12px",
                  borderBottomLeftRadius: "12px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                  <span
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      color: "#9CA3AF",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    Outras Abordagens
                  </span>
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      backgroundColor: "#E5E7EB",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ChevronRight
                      size={11}
                      style={{ color: "#9CA3AF", transform: "rotate(45deg)" }}
                      strokeWidth={3}
                    />
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "#6B7280",
                    lineHeight: 1.6,
                    fontWeight: 400,
                  }}
                >
                  {row.other}
                </p>
              </div>

              {/* Divider */}
              <div
                className="hidden md:block"
                style={{ backgroundColor: "#E5E7EB", width: "1px" }}
              />
              <div
                className="md:hidden"
                style={{ height: "1px", backgroundColor: "#E5E7EB" }}
              />

              {/* Right Area - SisteQ */}
              <div
                className="md:w-[60%]"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderLeft: "4px solid #004BA8",
                  padding: "24px",
                  borderTopRightRadius: "12px",
                  borderBottomRightRadius: "12px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                  <span
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      color: "#004BA8",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    SisteQ
                  </span>
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      backgroundColor: "#004BA8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CheckCircle2 size={11} color="#FFFFFF" strokeWidth={3} />
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "#111827",
                    lineHeight: 1.6,
                    fontWeight: 600,
                  }}
                >
                  {row.sisteq}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   10 · CTA FINAL
   ═══════════════════════════════════════════════════════════════ */

function PlatformCTA() {
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
                PRONTO PARA CONHECER MELHOR?
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
              Veja a plataforma aplicada à{" "}
              <span style={{ color: "#60A5FA" }}>sua realidade.</span>
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
              Em uma demonstração de 30 minutos, mostramos como o SisteQ se encaixa na sua gestão.
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
              {["Sem compromisso", "Demonstração personalizada", "Equipe especializada"].map(
                (text) => (
                  <div key={text} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full" style={{ backgroundColor: "#60A5FA" }} />
                    <span
                      style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", fontWeight: 400 }}
                    >
                      {text}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
