import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { getArtigos, getArtigoBySlug } from "@/lib/artigos";
import { formatarData, CATEGORIA_CORES } from "@/lib/artigos-utils";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getArtigos().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const artigo = getArtigoBySlug(params.slug);
  if (!artigo) return {};
  return {
    title: artigo.titulo,
    description: artigo.descricao,
    alternates: { canonical: `/conteudos/${artigo.slug}` },
    openGraph: {
      title: artigo.titulo,
      description: artigo.descricao,
      type: "article",
      publishedTime: artigo.data,
      authors: [artigo.autor],
    },
  };
}

export default function ArtigoPage({ params }: Props) {
  const artigo = getArtigoBySlug(params.slug);
  if (!artigo) notFound();

  const cor = CATEGORIA_CORES[artigo.categoria] ?? "#004BA8";

  return (
    <main>
      {/* Hero do artigo */}
      <section
        className="relative pt-24 pb-16 lg:pt-32 lg:pb-20"
        style={{
          background: artigo.imagemCapa
            ? `linear-gradient(to bottom, rgba(11,31,75,0.85) 0%, rgba(0,75,168,0.75) 100%), url(${artigo.imagemCapa}) center/cover no-repeat`
            : "linear-gradient(135deg, #0B1F4B 0%, #004BA8 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link
            href="/conteudos"
            className="inline-flex items-center gap-2 text-blue-300 hover:text-white transition-colors mb-8 text-sm"
          >
            <ArrowLeft size={16} />
            Voltar para Conteúdos
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span
              className="px-3 py-1 rounded-full text-xs"
              style={{ backgroundColor: `${cor}30`, color: "#FFFFFF", fontWeight: 600 }}
            >
              {artigo.categoria}
            </span>
            <span className="flex items-center gap-1.5 text-blue-200 text-sm">
              <Calendar size={14} />
              {formatarData(artigo.data)}
            </span>
            <span className="flex items-center gap-1.5 text-blue-200 text-sm">
              <Clock size={14} />
              {artigo.tempoLeitura} min de leitura
            </span>
          </div>

          <h1
            className="text-white mb-6"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em" }}
          >
            {artigo.titulo}
          </h1>

          <p
            className="text-blue-100"
            style={{ fontSize: "1.1rem", lineHeight: 1.7 }}
          >
            {artigo.descricao}
          </p>

          <div className="flex items-center gap-2 mt-6 pt-6 border-t border-blue-700/50">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
              style={{ backgroundColor: cor }}
            >
              {artigo.autor.charAt(0).toUpperCase()}
            </div>
            <span className="text-blue-200 text-sm">Por {artigo.autor}</span>
          </div>
        </div>
      </section>

      {/* Corpo do artigo */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <article
            className="prose prose-lg max-w-none"
            style={{ color: "#1E293B", lineHeight: 1.8 }}
            dangerouslySetInnerHTML={{ __html: artigo.conteudo }}
          />
        </div>
      </section>

      {/* Footer do artigo */}
      <section className="py-12" style={{ backgroundColor: "#F8FAFC", borderTop: "1px solid #E2E8F0" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2 text-sm" style={{ color: "#64748B" }}>
            <Tag size={15} />
            <span>{artigo.categoria}</span>
          </div>
          <Link
            href="/conteudos"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: "#004BA8", color: "#FFFFFF" }}
          >
            <ArrowLeft size={15} />
            Ver todos os artigos
          </Link>
        </div>
      </section>
    </main>
  );
}
