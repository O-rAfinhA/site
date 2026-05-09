"use client";

import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";
import React, { type PropsWithChildren } from "react";

export default function SignInClient() {
  return (
    <section className="min-h-[calc(100vh-4rem)] py-16" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-md mx-auto px-6 lg:px-8">
        <div className="rounded-3xl p-8 lg:p-10 shadow-xl" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="mb-8 text-center">
            <h1
              className="mb-2"
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                color: "#0B1F4B",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              Login
            </h1>
            <p style={{ fontSize: "0.95rem", color: "#64748B", lineHeight: 1.6 }}>
              Entre para continuar
            </p>
          </div>

          <ClerkLoading>
            <div role="status" aria-live="polite" aria-label="Carregando login" className="space-y-4">
              <div className="h-4 w-44 rounded bg-slate-200 animate-pulse" />
              <div className="h-11 w-full rounded-lg bg-slate-200 animate-pulse" />
              <div className="h-4 w-28 rounded bg-slate-200 animate-pulse" />
              <div className="h-11 w-full rounded-lg bg-slate-200 animate-pulse" />
              <div className="h-12 w-full rounded-lg bg-slate-200 animate-pulse" />
            </div>
          </ClerkLoading>

          <ClerkLoaded>
            <div className="transition-opacity duration-300">
              <ClerkAuthErrorBoundary>
                <SignIn
                  routing="hash"
                  signUpUrl="/sign-up"
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
              </ClerkAuthErrorBoundary>
            </div>
          </ClerkLoaded>
        </div>
      </div>
    </section>
  );
}

class ClerkAuthErrorBoundary extends React.Component<PropsWithChildren, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div role="alert" className="rounded-2xl border border-slate-200 p-5 text-center">
          <p style={{ fontSize: "0.95rem", color: "#0B1F4B", fontWeight: 700, lineHeight: 1.4 }}>
            Não foi possível carregar o login
          </p>
          <p className="mt-2" style={{ fontSize: "0.9rem", color: "#64748B", lineHeight: 1.6 }}>
            Tente novamente em instantes.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
