"use client";

import { useState, useMemo } from "react";
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
  PackageOpen,
} from "lucide-react";
import type { Artigo } from "@/lib/artigos";
import { CATEGORIA_CORES, formatarData } from "@/lib/artigos";
import type { Material } from "@/lib/materiais";

// ─── Props ────────────────────────────────────────────────────────────────────

interface ContentPageProps {
  artigos: Artigo[];
  materiais: Material[];
}

// ─── Página ───────────────────────────────────────────────────────────────────

export default function ContentPage({ artigos, materiais }: ContentPageProps) {
  const [activeFilter, setActiveFilter] = useState("todos");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArtigos = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return artigos.filter((a) => {
      const matchesFilter =
        activeFilter === "todos" ||
        a.categoria.toLowerCase().replace(/[\s-]/g, "") ===
          activeFilter.replace(/[\s-]/g, "");
      const matchesSearch =
        !q ||
        a.titulo.toLowerCase().includes(q) ||
        a.descricao.toLowerCase().includes(q) ||
        a.autor.toLowerCase().includes(q) ||
        a.categoria.toLowerCase().includes(q);
      return matchesFilter && matchesSearch;
    });
  }, [artigos, activeFilter, searchQuery]);

  const destaque = filteredArtigos.find((a) => a.destaque) ?? filteredArtigos[0] ?? null;
  const grid = filteredArtigos.filter((a) => a !== destaque);

  const counts = useMemo(() => {
    const map: Record<string, number> = { todos: artigos.length };
    artigos.forEach((a) => {
      const key = a.categoria.toLowerCase().replace(/[\s-]/g, "");
      map[key] = (map[key] ?? 0) + 1;
    });
    return map;
  }, [artigos]);

  return (
    <>
      <ContentHero searchQuery={searchQuery} onSearch={setSearchQuery} />
      <ContentFilters
        activeFilter={activeFilter}
        onFilter={setActiveFilter}
        counts={counts}
      />
      {destaque && <FeaturedArticle artigo={destaque} />}
      {grid.length > 0 && <BlogGrid artigos={grid} />}
      {filteredArtigos.length === 0 && (
        <section className="py-24 text-center" style={{ backgroundColor: "#F8FAFC" }}>
          <FileText size={48} className="mx-auto text-slate-300 mb-4" />
          <p style={{ color: "#64748B", fontSize: "1rem" }}>
            Nenhum artigo encontrado para esta busca.
          </p>
        </section>
      )}
      {materiais.length > 0 && <DownloadMaterials materiais={materiais} />}
      <Newsletter />
    </>
  );
}

// ─── Hero com busca ───────────────────────────────────────────────────────────

function ContentHero({
  searchQuery,
  onSearch,
}: {
  searchQuery: string;
  onSearch: (q: string) => void;
}) {
  return (
    <section
      className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20"
      style={{ background: "linear-gradient(135deg, #0B1F4B 0%, #004BA8 100%)" }}
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
            style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}
          >
            Conteúdo Especializado
          </span>
        </div>

        <h1
          className="text-white mb-6"
          style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em" }}
        >
          Aprenda com quem vive{" "}
          <span style={{ color: "#60A5FA" }}>sistemas de gestão</span> todos os dias
        </h1>

        <p
          className="text-blue-100 mb-10 max-w-3xl mx-auto"
          style={{ fontSize: "1.15rem", lineHeight: 1.7 }}
        >
          Artigos, guias práticos, templates e materiais para baixar. Conteúdo técnico feito por quem vive certificações todos os dias.
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "rgba(255,255,255,0.6)" }} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
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

// ─── Filtros dinâmicos ────────────────────────────────────────────────────────

const FILTROS = [
  { id: "todos",     label: "Todos" },
  { id: "iso9001",   label: "ISO 9001",  color: "#004BA8" },
  { id: "iso14001",  label: "ISO 14001", color: "#0D7C4A" },
  { id: "pbqph",     label: "PBQP-H",   color: "#B45A1C" },
  { id: "gestao",    label: "Gestão",    color: "#6366F1" },
  { id: "auditoria", label: "Auditoria", color: "#F59E0B" },
];

function ContentFilters({
  activeFilter,
  onFilter,
  counts,
}: {
  activeFilter: string;
  onFilter: (id: string) => void;
  counts: Record<string, number>;
}) {
  return (
    <section
      className="py-8 sticky top-16 z-40"
      style={{ backgroundColor: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          <Filter size={18} className="text-slate-400 flex-shrink-0" />
          {FILTROS.map((f) => {
            const count = counts[f.id] ?? 0;
            const active = activeFilter === f.id;
            const color = (f as { id: string; label: string; color?: string }).color ?? "#004BA8";
            return (
              <button
                key={f.id}
                onClick={() => onFilter(f.id)}
                className="flex-shrink-0 px-4 py-2 rounded-lg text-sm transition-all"
                style={{
                  backgroundColor: active ? color : "#FFFFFF",
                  color: active ? "#FFFFFF" : "#64748B",
                  border: `1px solid ${active ? color : "#E2E8F0"}`,
                  fontWeight: active ? 600 : 500,
                }}
              >
                {f.label}
                <span
                  className="ml-2 px-1.5 py-0.5 rounded"
                  style={{ backgroundColor: active ? "rgba(255,255,255,0.2)" : "#F1F5F9", fontSize: "0.75rem" }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Artigo em destaque ───────────────────────────────────────────────────────

function FeaturedArticle({ artigo }: { artigo: Artigo }) {
  const cor = CATEGORIA_CORES[artigo.categoria] ?? "#004BA8";
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
          <div
            className="rounded-xl overflow-hidden"
            style={{ backgroundColor: "#E2E8F0", minHeight: "300px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}
          >
            {artigo.imagemCapa ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={artigo.imagemCapa}
                alt={artigo.titulo}
                style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
              />
            ) : (
              <BookOpen size={80} className="text-slate-300" />
            )}
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="px-3 py-1 rounded-full text-xs"
                style={{ backgroundColor: `${cor}1A`, color: cor, fontWeight: 600 }}
              >
                {artigo.categoria}
              </span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "#64748B" }}>
                <Calendar size={14} />
                {formatarData(artigo.data)}
              </span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "#64748B" }}>
                <Clock size={14} />
                {artigo.tempoLeitura} min
              </span>
            </div>

            <h3
              className="mb-4"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700, color: "#0B1F4B", lineHeight: 1.3 }}
            >
              {artigo.titulo}
            </h3>

            <p className="mb-6" style={{ fontSize: "1rem", color: "#64748B", lineHeight: 1.7 }}>
              {artigo.descricao}
            </p>

            <Link
              href={`/conteudos/${artigo.slug}`}
              className="inline-flex items-center gap-2 text-sm transition-colors"
              style={{ color: cor, fontWeight: 600 }}
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

// ─── Grid de artigos ──────────────────────────────────────────────────────────

function BlogGrid({ artigos }: { artigos: Artigo[] }) {
  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1F4B" }}>
            Artigos recentes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artigos.map((artigo) => {
            const cor = CATEGORIA_CORES[artigo.categoria] ?? "#004BA8";
            return (
              <Link
                key={artigo.slug}
                href={`/conteudos/${artigo.slug}`}
                className="group block rounded-xl overflow-hidden transition-all hover:-translate-y-1"
                style={{ backgroundColor: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
              >
                <div
                  className="relative overflow-hidden"
                  style={{ backgroundColor: "#E2E8F0", height: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  {artigo.imagemCapa ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={artigo.imagemCapa}
                      alt={artigo.titulo}
                      style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
                    />
                  ) : (
                    <FileText size={60} className="text-slate-300" />
                  )}
                  <div
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs"
                    style={{ backgroundColor: cor, color: "#FFFFFF", fontWeight: 600 }}
                  >
                    {artigo.categoria}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-xs" style={{ color: "#94A3B8" }}>
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      {formatarData(artigo.data)}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} />
                      {artigo.tempoLeitura} min
                    </span>
                  </div>

                  <h3
                    className="mb-3 group-hover:text-blue-600 transition-colors"
                    style={{ fontSize: "1.15rem", fontWeight: 600, color: "#0B1F4B", lineHeight: 1.4 }}
                  >
                    {artigo.titulo}
                  </h3>

                  <p className="mb-4" style={{ fontSize: "0.9rem", color: "#64748B", lineHeight: 1.6 }}>
                    {artigo.descricao}
                  </p>

                  <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor: "#F1F5F9" }}>
                    <span style={{ fontSize: "0.85rem", color: "#94A3B8" }}>Por {artigo.autor}</span>
                    <ArrowRight size={16} className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Downloads ────────────────────────────────────────────────────────────────

const TIPO_COR: Record<string, string> = {
  'Template':  '#004BA8',
  'Guia':      '#F59E0B',
  'E-book':    '#0D7C4A',
  'Checklist': '#B45A1C',
};

function tipoIcone(tipo: string) {
  switch (tipo) {
    case 'Template':  return CheckSquare;
    case 'Guia':      return BookOpen;
    case 'E-book':    return Award;
    case 'Checklist': return FileText;
    default:          return PackageOpen;
  }
}

function formatarDownloads(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace('.0', '')}k`;
  return String(n);
}

function DownloadMaterials({ materiais }: { materiais: Material[] }) {
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
          {materiais.map((material) => {
            const cor = TIPO_COR[material.tipo] ?? "#004BA8";
            const Icon = tipoIcone(material.tipo);
            return (
              <div
                key={material.slug}
                className="group rounded-2xl p-8 transition-all hover:shadow-xl"
                style={{ backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0" }}
              >
                <div className="flex items-start gap-6">
                  <div
                    className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${cor}15` }}
                  >
                    <Icon size={26} style={{ color: cor }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="px-2 py-0.5 rounded text-xs"
                        style={{ backgroundColor: `${cor}20`, color: cor, fontWeight: 600 }}
                      >
                        {material.tipo}
                      </span>
                      <span className="text-xs" style={{ color: "#94A3B8" }}>
                        {material.formato}{material.tamanho ? ` · ${material.tamanho}` : ""}
                      </span>
                    </div>
                    <h3
                      className="mb-2"
                      style={{ fontSize: "1.15rem", fontWeight: 600, color: "#0B1F4B", lineHeight: 1.4 }}
                    >
                      {material.titulo}
                    </h3>
                    <p
                      className="mb-4"
                      style={{ fontSize: "0.9rem", color: "#64748B", lineHeight: 1.6 }}
                    >
                      {material.descricao}
                    </p>
                    <div className="flex items-center gap-4">
                      <a
                        href={material.urlDownload}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all hover:opacity-90"
                        style={{ backgroundColor: cor, color: "#FFFFFF", fontSize: "0.9rem", fontWeight: 600 }}
                      >
                        <Download size={16} />
                        Baixar material
                      </a>
                      {material.downloads > 0 && (
                        <span className="text-xs" style={{ color: "#94A3B8" }}>
                          {formatarDownloads(material.downloads)} downloads
                        </span>
                      )}
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

// ─── Newsletter ───────────────────────────────────────────────────────────────

function Newsletter() {
  return (
    <section className="py-20 lg:py-28" style={{ background: "linear-gradient(135deg, #0B1F4B 0%, #004BA8 100%)" }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
          style={{ backgroundColor: "rgba(96,165,250,0.2)" }}
        >
          <Lightbulb size={32} className="text-blue-300" />
        </div>
        <h2
          className="text-white mb-4"
          style={{ fontSize: "clamp(1.75rem, 3vw, 2.4rem)", fontWeight: 700, lineHeight: 1.2 }}
        >
          Receba conteúdo novo toda semana
        </h2>
        <p
          className="text-blue-100 mb-8"
          style={{ fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "600px", margin: "0 auto 2rem" }}
        >
          Artigos práticos, templates e novidades sobre gestão da qualidade direto no seu email. Sem spam, só conteúdo que agrega.
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
            style={{ backgroundColor: "#10B981", color: "#FFFFFF", fontSize: "0.95rem", fontWeight: 600 }}
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
