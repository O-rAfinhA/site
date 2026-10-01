import Link from "next/link";
import { ArrowRight, CheckCircle2, type LucideIcon } from "lucide-react";

type Step = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

type ThankYouPageProps = {
  badgeIcon: LucideIcon;
  badgeText: string;
  title: string;
  description: string;
  accent: string;
  accentSoft: string;
  glow: string;
  gradient: string;
  stepsTitle: string;
  steps: Step[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export default function ThankYouPage({
  badgeIcon: BadgeIcon,
  badgeText,
  title,
  description,
  accent,
  accentSoft,
  glow,
  gradient,
  stepsTitle,
  steps,
  primaryCta,
  secondaryCta,
}: ThankYouPageProps) {
  return (
    <>
      <section
        className="relative overflow-hidden pt-32 pb-28 lg:pt-40 lg:pb-32"
        style={{ background: gradient }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-20"
            style={{ backgroundColor: glow, filter: "blur(100px)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-15"
            style={{ backgroundColor: "#10B981", filter: "blur(90px)" }}
          />
        </div>

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 border border-white/20"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          >
            <BadgeIcon size={14} style={{ color: glow }} />
            <span
              className="text-blue-100"
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {badgeText}
            </span>
          </div>

          <div
            className="mx-auto mb-8 flex items-center justify-center rounded-full"
            style={{
              width: "88px",
              height: "88px",
              backgroundColor: "rgba(16,185,129,0.15)",
              border: "1px solid rgba(16,185,129,0.4)",
            }}
          >
            <CheckCircle2 size={44} style={{ color: "#34D399" }} strokeWidth={2} />
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
            {title}
          </h1>

          <p
            className="text-blue-100 max-w-2xl mx-auto"
            style={{ fontSize: "1.15rem", lineHeight: 1.7, fontWeight: 400 }}
          >
            {description}
          </p>
        </div>
      </section>

      <section className="pb-20 lg:pb-28" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8 -mt-16 relative z-10">
          <div className="rounded-3xl p-8 lg:p-12 shadow-xl" style={{ backgroundColor: "#FFFFFF" }}>
            <h2
              className="text-center mb-10"
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                fontWeight: 700,
                color: "#0B1F4B",
                lineHeight: 1.2,
              }}
            >
              {stepsTitle}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="text-center p-6 rounded-2xl"
                  style={{ backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0" }}
                >
                  <div
                    className="inline-flex items-center justify-center mb-4 rounded-xl"
                    style={{ width: "52px", height: "52px", backgroundColor: accentSoft }}
                  >
                    <step.icon size={26} style={{ color: accent }} />
                  </div>
                  <p
                    className="mb-2"
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: accent,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Passo {i + 1}
                  </p>
                  <h3
                    className="mb-2"
                    style={{ fontSize: "1.05rem", fontWeight: 600, color: "#0B1F4B", lineHeight: 1.3 }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "#64748B", lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-white transition-all duration-200 hover:shadow-lg w-full sm:w-auto"
                style={{ backgroundColor: accent, fontSize: "1rem", fontWeight: 600 }}
              >
                {primaryCta.label}
                <ArrowRight size={16} />
              </Link>
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg transition-all duration-200 hover:bg-slate-100 w-full sm:w-auto"
                style={{
                  color: "#0B1F4B",
                  border: "1px solid #CBD5E1",
                  fontSize: "1rem",
                  fontWeight: 600,
                }}
              >
                {secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
