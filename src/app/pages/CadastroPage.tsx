"use client";

import Link from "next/link";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignUp } from "@clerk/nextjs";
import { Lock } from "lucide-react";
import React, { type PropsWithChildren } from "react";

export default function CadastroPage() {
  return (
    <>
      <CadastroHero />
      <CadastroForm />
    </>
  );
}

function CadastroHero() {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-10 lg:pt-40 lg:pb-14"
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

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 border border-blue-400/30"
          style={{ backgroundColor: "rgba(96,165,250,0.15)" }}
        >
          <Lock size={14} className="text-blue-300" />
          <span
            className="text-blue-200"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Área do Cliente
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
          Crie sua conta
        </h1>

        <p
          className="text-blue-100 mb-8 max-w-2xl mx-auto"
          style={{
            fontSize: "1.15rem",
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          Cadastre-se para acessar a plataforma SisteQ.
        </p>
      </div>
    </section>
  );
}

function CadastroForm() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.sisteq.com.br";

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-md mx-auto px-6 lg:px-8 -mt-20 relative z-10">
        <div className="rounded-3xl p-8 lg:p-10 shadow-xl" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="mb-8 text-center">
            <h2
              className="mb-2"
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#0B1F4B",
                lineHeight: 1.2,
              }}
            >
              Bem-vindo
            </h2>
            <p style={{ fontSize: "0.9rem", color: "#64748B", lineHeight: 1.6 }}>
              Crie sua conta para continuar
            </p>
          </div>

          <SignedOut>
            <ClerkLoading>
              <div role="status" aria-live="polite" aria-label="Carregando cadastro" className="space-y-4">
                <div className="h-4 w-44 rounded bg-slate-200 animate-pulse" />
                <div className="h-11 w-full rounded-lg bg-slate-200 animate-pulse" />
                <div className="h-4 w-28 rounded bg-slate-200 animate-pulse" />
                <div className="h-11 w-full rounded-lg bg-slate-200 animate-pulse" />
                <div className="h-12 w-full rounded-lg bg-slate-200 animate-pulse" />
              </div>
            </ClerkLoading>

            <ClerkLoaded>
              <div className="transition-opacity duration-300">
                <ClerkSignUpErrorBoundary fallbackHref={appUrl}>
                  <SignUp
                    routing="hash"
                    signInUrl="/login"
                    forceRedirectUrl="/cadastro"
                    appearance={{
                      variables: {
                        fontFamily: "Inter, sans-serif",
                        colorPrimary: "#004BA8",
                        colorText: "#0B1F4B",
                        colorTextSecondary: "#64748B",
                        colorBackground: "transparent",
                        borderRadius: "0.75rem",
                      },
                      elements: {
                        card: "shadow-none bg-transparent p-0 w-full",
                        cardBox: "shadow-none bg-transparent p-0 w-full",
                        headerTitle: "hidden",
                        headerSubtitle: "hidden",
                        footer: "hidden",
                        dividerRow: "hidden",
                        socialButtonsBlockButton: "hidden",
                        socialButtonsBlockButtonText: "hidden",
                        formFieldLabel: "text-[0.875rem] font-semibold text-slate-700 mb-2",
                        formFieldInput:
                          "w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-[0.95rem]",
                        formButtonPrimary:
                          "w-full px-8 py-3.5 rounded-lg transition-all duration-200 hover:shadow-lg inline-flex items-center justify-center gap-2 text-white text-[1rem] font-semibold",
                        formButtonPrimary__loading: "opacity-90",
                        formButtonReset: "text-blue-700 hover:underline",
                        formFieldAction: "text-[0.875rem] text-blue-700 font-semibold hover:underline",
                        formFieldErrorText: "text-red-600 text-sm",
                        formFieldWarningText: "text-amber-700 text-sm",
                        formFieldSuccessText: "text-emerald-700 text-sm",
                      },
                    }}
                  />
                </ClerkSignUpErrorBoundary>
              </div>
            </ClerkLoaded>

            <div className="text-center mt-6">
              <p style={{ fontSize: "0.9rem", color: "#64748B" }}>
                Já tem uma conta?{" "}
                <Link
                  href="/login"
                  style={{
                    color: "#004BA8",
                    fontWeight: 600,
                  }}
                  className="hover:underline"
                >
                  Fazer login
                </Link>
              </p>
            </div>
          </SignedOut>

          <SignedIn>
            <div className="rounded-2xl border border-slate-200 p-5 text-center transition-all">
              <p style={{ fontSize: "0.95rem", color: "#0B1F4B", fontWeight: 700, lineHeight: 1.4 }}>
                Cadastro concluído
              </p>
              <p className="mt-2" style={{ fontSize: "0.9rem", color: "#64748B", lineHeight: 1.6 }}>
                Sua conta já está autenticada. Abra o app para continuar.
              </p>
              <a
                href={appUrl}
                className="mt-5 inline-flex w-full items-center justify-center rounded-lg px-8 py-3.5 text-white text-[1rem] font-semibold transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: "#004BA8" }}
              >
                Abrir app
              </a>
            </div>
          </SignedIn>
        </div>

        <p className="text-center mt-6" style={{ fontSize: "0.8rem", color: "#94A3B8", lineHeight: 1.5 }}>
          <Lock size={12} className="inline mr-1" />
          Suas credenciais são criptografadas e mantidas em segurança.
        </p>
      </div>
    </section>
  );
}

class ClerkSignUpErrorBoundary extends React.Component<
  PropsWithChildren<{ fallbackHref: string }>,
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div role="alert" className="rounded-2xl border border-slate-200 p-5 text-center">
          <p style={{ fontSize: "0.95rem", color: "#0B1F4B", fontWeight: 700, lineHeight: 1.4 }}>
            Não foi possível carregar o cadastro
          </p>
          <p className="mt-2" style={{ fontSize: "0.9rem", color: "#64748B", lineHeight: 1.6 }}>
            Tente novamente em instantes. Se preferir, abra o app para continuar.
          </p>
          <a
            href={this.props.fallbackHref}
            className="mt-5 inline-flex w-full items-center justify-center rounded-lg px-8 py-3.5 text-white text-[1rem] font-semibold transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: "#004BA8" }}
          >
            Abrir app
          </a>
        </div>
      );
    }

    return this.props.children;
  }
}
