import { ArrowRight, Calendar, MessageCircle } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section
      id="demo"
      className="relative overflow-hidden py-28 lg:py-40"
      style={{ backgroundColor: "#0B1F4B" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-15"
          style={{ backgroundColor: "#004BA8", filter: "blur(120px)" }}
        />
        {/* Subtle grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ctaGrid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ctaGrid)" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-10 border border-white/10 mx-auto"
          style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: "#60A5FA" }}
          />
          <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>
            Demonstrações disponíveis esta semana
          </span>
        </div>

        <h2
          className="text-white mb-6"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
          }}
        >
          Tire a ISO 9001 da planilha e coloque a gestão{" "}
          <span style={{ color: "#60A5FA" }}>em um sistema claro e integrado</span>
        </h2>

        <p
          className="mx-auto mb-12"
          style={{
            fontSize: "1.125rem",
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.75,
            maxWidth: "560px",
            fontWeight: 400,
          }}
        >
          Se a sua empresa precisa de controle real da ISO 9001, com evidências organizadas e processos conectados, conheça o SisteQ.
        </p>

        {/* CTA buttons */}
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
            Solicitar Demonstração
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/demonstracao"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg text-white/90 transition-all hover:text-white hover:border-white/40 border border-white/20"
            style={{
              fontWeight: 500,
              fontSize: "1rem",
            }}
          >
            <MessageCircle size={18} />
            Falar com Especialista
          </Link>
        </div>

        {/* Trust signals */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          {[
            "Sem compromisso",
            "Demo personalizada para ISO 9001",
            "Equipe especializada em gestão da qualidade",
          ].map((text) => (
            <div key={text} className="flex items-center gap-2">
              <div
                className="w-1 h-1 rounded-full"
                style={{ backgroundColor: "#60A5FA" }}
              />
              <span
                style={{
                  fontSize: "0.825rem",
                  color: "rgba(255,255,255,0.45)",
                  fontWeight: 400,
                }}
              >
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
