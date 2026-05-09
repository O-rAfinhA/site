"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  BookOpen,
  Download,
  Calendar,
  Clock,
  ArrowRight,
  FileText,
  CheckSquare,
  Lightbulb,
  TrendingUp,
  Award,
  Filter,
} from "lucide-react";

export default function ContentPage() {
  return (
    <>
      <ContentHero />
      <ContentFilters />
      <FeaturedArticle />
      <BlogGrid />
      <DownloadMaterials />
      <Newsletter />
    </>
  );
}

function ContentHero() {
  return (
    <section
      className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20"
      style={{
        background: "linear-gradient(135deg, #0B1F4B 0%, #004BA8 100%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-15"
          style={{ backgroundColor: "#60A5FA", filter: "blur(100px)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10"
          style={{ backgroundColor: "#10B981", filter: "blur(90px)" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 border border-blue-400/30"
          style={{ backgroundColor: "rgba(96,165,250,0.15)" }}
        >
          <BookOpen size={14} className="text-blue-300" />
          <span
            className="text-blue-200"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Conteúdo Especializado
          </span>
        </div>

        <h1
          className="text-white mb-6"
          style={{
            fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
          }}
        >
          Aprenda com quem vive{" "}
          <span style={{ color: "#60A5FA" }}>sistemas de gestão</span> todos os dias
        </h1>

        <p
          className="text-blue-100 mb-10 max-w-3xl mx-auto"
          style={{
            fontSize: "1.15rem",
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          Artigos, guias práticos, templates e materiais para baixar. Conteúdo técnico feito por quem vive certificações todos os dias.
        </p>

        {/* Search bar */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2"
              style={{ color: "rgba(255,255,255,0.6)" }}
            />
            <input
              type="text"
              placeholder="Buscar por tema, norma ou assunto..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
              style={{ fontSize: "0.95rem" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContentFilters() {
  const [activeFilter, setActiveFilter] = useState("todos");

  const filters = [
    { id: "todos", label: "Todos", count: 47 },
    { id: "iso9001", label: "ISO 9001", count: 18, color: "#004BA8" },
    { id: "iso14001", label: "ISO 14001", count: 12, color: "#0D7C4A" },
    { id: "pbqph", label: "PBQP-H", count: 9, color: "#B45A1C" },
    { id: "gestao", label: "Gestão", count: 15 },
    { id: "auditoria", label: "Auditoria", count: 8 },
  ];

  return (
    <section className="py-8 sticky top-16 z-40" style={{ backgroundColor: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          <Filter size={18} className="text-slate-400 flex-shrink-0" />
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className="flex-shrink-0 px-4 py-2 rounded-lg text-sm transition-all"
              style={{
                backgroundColor: activeFilter === filter.id ? (filter.color || "#004BA8") : "#FFFFFF",
                color: activeFilter === filter.id ? "#FFFFFF" : "#64748B",
                border: `1px solid ${activeFilter === filter.id ? (filter.color || "#004BA8") : "#E2E8F0"}`,
                fontWeight: activeFilter === filter.id ? 600 : 500,
              }}
            >
              {filter.label}
              <span
                className="ml-2 px-1.5 py-0.5 rounded"
                style={{
                  backgroundColor: activeFilter === filter.id ? "rgba(255,255,255,0.2)" : "#F1F5F9",
                  fontSize: "0.75rem",
                }}
              >
                {filter.count}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedArticle() {
  return (
    <section className="pt-20 pb-16 lg:py-20" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
          <TrendingUp size={20} style={{ color: "#004BA8" }} />
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0B1F4B" }}>
            Artigo em destaque
          </h2>
        </div>

        <div
          className="grid lg:grid-cols-2 gap-10 rounded-2xl overflow-hidden p-8 lg:p-10"
          style={{
            background: "linear-gradient(135deg, rgba(0,75,168,0.05) 0%, rgba(16,185,129,0.05) 100%)",
            border: "1px solid #E2E8F0",
          }}
        >
          {/* Image */}
          <div
            className="rounded-xl overflow-hidden"
            style={{
              backgroundColor: "#E2E8F0",
              minHeight: "300px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BookOpen size={80} className="text-slate-300" />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="px-3 py-1 rounded-full text-xs"
                style={{
                  backgroundColor: "rgba(0,75,168,0.1)",
                  color: "#004BA8",
                  fontWeight: 600,
                }}
              >
                ISO 9001
              </span>
              <span
                className="flex items-center gap-1.5 text-xs"
                style={{ color: "#64748B" }}
              >
                <Calendar size={14} />
                28 de abril, 2026
              </span>
              <span
                className="flex items-center gap-1.5 text-xs"
                style={{ color: "#64748B" }}
              >
                <Clock size={14} />
                8 min
              </span>
            </div>

            <h3
              className="mb-4"
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                fontWeight: 700,
                color: "#0B1F4B",
                lineHeight: 1.3,
              }}
            >
              Como estruturar a gestão de riscos e oportunidades na ISO 9001:2015
            </h3>

            <p
              className="mb-6"
              style={{
                fontSize: "1rem",
                color: "#64748B",
                lineHeight: 1.7,
              }}
            >
              A cláusula 6.1 exige análise de riscos e oportunidades, mas muitas empresas tratam
              isso como burocracia. Neste guia, mostramos como fazer uma gestão de riscos que
              realmente funciona na prática, com exemplos reais e templates prontos.
            </p>

            <Link
              href="#"
              className="inline-flex items-center gap-2 text-sm transition-colors"
              style={{ color: "#004BA8", fontWeight: 600 }}
            >
              Ler artigo completo
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogGrid() {
  const articles = [
    {
      id: 1,
      category: "ISO 9001",
      categoryColor: "#004BA8",
      title: "5 não conformidades mais comuns em auditorias ISO 9001",
      excerpt: "Evite surpresas na próxima auditoria. Listamos os problemas que mais aparecem e como resolvê-los antes.",
      date: "25 abr 2026",
      readTime: "6 min",
      author: "Ana Paula Santos",
    },
    {
      id: 2,
      category: "ISO 14001",
      categoryColor: "#0D7C4A",
      title: "Como monitorar aspectos ambientais significativos na prática",
      excerpt: "A identificação e avaliação de aspectos é obrigatória. Veja como fazer isso de forma sistemática e rastreável.",
      date: "22 abr 2026",
      readTime: "7 min",
      author: "Carlos Eduardo Lima",
    },
    {
      id: 3,
      category: "PBQP-H",
      categoryColor: "#B45A1C",
      title: "RDO digital: como substituir o papel sem perder conformidade",
      excerpt: "O RDO é o coração do PBQP-H em obra. Mostramos como digitalizar sem perder rastreabilidade ou evidência.",
      date: "20 abr 2026",
      readTime: "5 min",
      author: "Roberto Mendes",
    },
    {
      id: 4,
      category: "Gestão",
      categoryColor: "#6366F1",
      title: "Indicadores que realmente importam para a Alta Direção",
      excerpt: "Pare de reportar métricas que ninguém usa. Veja quais KPIs fazem diferença nas reuniões de análise crítica.",
      date: "18 abr 2026",
      readTime: "8 min",
      author: "Mariana Costa",
    },
    {
      id: 5,
      category: "ISO 9001",
      categoryColor: "#004BA8",
      title: "Contexto da organização: preenchendo sem encher linguiça",
      excerpt: "A cláusula 4 da ISO 9001 pede análise de contexto. Como fazer isso de forma útil, não apenas para cumprir tabela.",
      date: "15 abr 2026",
      readTime: "6 min",
      author: "Fernando Oliveira",
    },
    {
      id: 6,
      category: "Auditoria",
      categoryColor: "#F59E0B",
      title: "Preparação para auditoria: checklist das 2 semanas antes",
      excerpt: "O que revisar, quem preparar, quais evidências separar. Roteiro completo para não deixar nada para trás.",
      date: "12 abr 2026",
      readTime: "10 min",
      author: "Patricia Andrade",
    },
  ];

  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1F4B" }}>
            Artigos recentes
          </h2>
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-sm transition-colors"
            style={{ color: "#004BA8", fontWeight: 600 }}
          >
            Ver todos os artigos
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              href="#"
              className="group block rounded-xl overflow-hidden transition-all hover:-translate-y-1"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E2E8F0",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              }}
            >
              {/* Image placeholder */}
              <div
                className="relative overflow-hidden"
                style={{
                  backgroundColor: "#E2E8F0",
                  height: "200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FileText size={60} className="text-slate-300" />
                <div
                  className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs"
                  style={{
                    backgroundColor: article.categoryColor,
                    color: "#FFFFFF",
                    fontWeight: 600,
                  }}
                >
                  {article.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-xs" style={{ color: "#94A3B8" }}>
                  <span className="flex items-center gap-1">
                    <Calendar size={13} />
                    {article.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock size={13} />
                    {article.readTime}
                  </span>
                </div>

                <h3
                  className="mb-3 group-hover:text-blue-600 transition-colors"
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 600,
                    color: "#0B1F4B",
                    lineHeight: 1.4,
                  }}
                >
                  {article.title}
                </h3>

                <p
                  className="mb-4"
                  style={{
                    fontSize: "0.9rem",
                    color: "#64748B",
                    lineHeight: 1.6,
                  }}
                >
                  {article.excerpt}
                </p>

                <div
                  className="pt-4 border-t flex items-center justify-between"
                  style={{ borderColor: "#F1F5F9" }}
                >
                  <span style={{ fontSize: "0.85rem", color: "#94A3B8" }}>
                    Por {article.author}
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load more */}
        <div className="text-center mt-12">
          <button
            className="px-8 py-3 rounded-lg transition-all border"
            style={{
              backgroundColor: "#FFFFFF",
              color: "#004BA8",
              borderColor: "#004BA8",
              fontWeight: 600,
              fontSize: "0.95rem",
            }}
          >
            Carregar mais artigos
          </button>
        </div>
      </div>
    </section>
  );
}

function DownloadMaterials() {
  const materials = [
    {
      id: 1,
      type: "Template",
      icon: CheckSquare,
      title: "Planilha de Gestão de Riscos ISO 9001",
      description: "Template pronto para análise de riscos e oportunidades conforme cláusula 6.1. Inclui matriz de probabilidade x impacto e plano de ação.",
      format: "Excel (.xlsx)",
      size: "245 KB",
      downloads: "1.2k",
      color: "#004BA8",
    },
    {
      id: 2,
      type: "Guia",
      icon: BookOpen,
      title: "Guia Completo de Preparação para Auditoria Externa",
      description: "Passo a passo de como se preparar nas 4 semanas antes da auditoria. Com checklists, cronograma e lista de evidências por cláusula.",
      format: "PDF",
      size: "3.2 MB",
      downloads: "2.8k",
      color: "#F59E0B",
    },
    {
      id: 3,
      type: "E-book",
      icon: Award,
      title: "ISO 14001: Aspectos Ambientais na Prática",
      description: "Como identificar, avaliar e controlar aspectos ambientais significativos. Com exemplos reais de indústria, comércio e serviços.",
      format: "PDF",
      size: "5.1 MB",
      downloads: "980",
      color: "#0D7C4A",
    },
    {
      id: 4,
      type: "Template",
      icon: FileText,
      title: "Kit Completo de Formulários PBQP-H",
      description: "RDO, FVS, controle de recebimento, registro de treinamento e mais 12 formulários editáveis para obra.",
      format: "Word (.docx)",
      size: "1.8 MB",
      downloads: "620",
      color: "#B45A1C",
    },
  ];

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Download size={24} style={{ color: "#004BA8" }} />
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1F4B" }}>
              Materiais para download
            </h2>
          </div>
          <p style={{ fontSize: "1.05rem", color: "#64748B", lineHeight: 1.7 }}>
            Templates, guias e e-books prontos para usar na sua gestão.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {materials.map((material) => {
            const Icon = material.icon;
            return (
              <div
                key={material.id}
                className="group rounded-2xl p-8 transition-all hover:shadow-xl"
                style={{
                  backgroundColor: "#F8FAFC",
                  border: "1px solid #E2E8F0",
                }}
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div
                    className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${material.color}15` }}
                  >
                    <Icon size={26} style={{ color: material.color }} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="px-2 py-0.5 rounded text-xs"
                        style={{
                          backgroundColor: `${material.color}20`,
                          color: material.color,
                          fontWeight: 600,
                        }}
                      >
                        {material.type}
                      </span>
                      <span className="text-xs" style={{ color: "#94A3B8" }}>
                        {material.format} · {material.size}
                      </span>
                    </div>

                    <h3
                      className="mb-2"
                      style={{
                        fontSize: "1.15rem",
                        fontWeight: 600,
                        color: "#0B1F4B",
                        lineHeight: 1.4,
                      }}
                    >
                      {material.title}
                    </h3>

                    <p
                      className="mb-4"
                      style={{
                        fontSize: "0.9rem",
                        color: "#64748B",
                        lineHeight: 1.6,
                      }}
                    >
                      {material.description}
                    </p>

                    <div className="flex items-center gap-4">
                      <button
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all"
                        style={{
                          backgroundColor: material.color,
                          color: "#FFFFFF",
                          fontSize: "0.9rem",
                          fontWeight: 600,
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        <Download size={16} />
                        Baixar material
                      </button>
                      <span className="text-xs" style={{ color: "#94A3B8" }}>
                        {material.downloads} downloads
                      </span>
                    </div>
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

function Newsletter() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{
        background: "linear-gradient(135deg, #0B1F4B 0%, #004BA8 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
          style={{ backgroundColor: "rgba(96,165,250,0.2)" }}
        >
          <Lightbulb size={32} className="text-blue-300" />
        </div>

        <h2
          className="text-white mb-4"
          style={{
            fontSize: "clamp(1.75rem, 3vw, 2.4rem)",
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          Receba conteúdo novo toda semana
        </h2>

        <p
          className="text-blue-100 mb-8"
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.7,
            maxWidth: "600px",
            margin: "0 auto 2rem",
          }}
        >
          Artigos práticos, templates e novidades sobre gestão da qualidade direto no seu email.
          Sem spam, só conteúdo que agrega.
        </p>

        <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            className="flex-1 px-5 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
            style={{ fontSize: "0.95rem" }}
          />
          <button
            type="submit"
            className="px-8 py-4 rounded-lg transition-all hover:opacity-90"
            style={{
              backgroundColor: "#10B981",
              color: "#FFFFFF",
              fontSize: "0.95rem",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Quero receber
          </button>
        </form>

        <p className="text-blue-200 text-xs mt-4">
          Ao se inscrever, você concorda em receber emails do SisteQ. Cancele quando quiser.
        </p>
      </div>
    </section>
  );
}
