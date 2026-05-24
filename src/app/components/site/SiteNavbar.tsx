"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Menu, ChevronDown, Shield, Leaf, HardHat, LayoutGrid } from "lucide-react";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, SignOutButton, UserButton } from "@clerk/nextjs";
import logoSisteq from "../../../../logo-sisteq.png";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const solutions = [
  {
    href: "/solucao/iso-9001",
    label: "ISO 9001",
    description: "Estrutura completa para implantar, manter e organizar a gestão da qualidade",
    icon: Shield,
    iconColor: "#3B82F6",
    iconBg: "#EFF6FF",
  },
  {
    href: "/solucao/iso-14001",
    label: "ISO 14001",
    description: "Gestão ambiental com controles, monitoramentos e evidências organizadas",
    icon: Leaf,
    iconColor: "#059669",
    iconBg: "#ECFDF5",
  },
  {
    href: "/solucao/pbqp-h",
    label: "PBQP-H",
    description: "Solução para construção civil com obra, RDO e controle técnico",
    icon: HardHat,
    iconColor: "#F59E0B",
    iconBg: "#FFFBEB",
  },
  {
    href: "/solucao/outras-normas",
    label: "Outras normas",
    description: "Sistemas de gestão ISO e outras certificações",
    icon: LayoutGrid,
    iconColor: "#7C3AED",
    iconBg: "#F5F3FF",
  },
];

const mainLinks = [
  { href: "/plataforma", label: "Plataforma" },
  { href: "/parceiros", label: "Parceiros" },
  { href: "/planos", label: "Planos" },
  { href: "/conteudos", label: "Conteúdos" },
];

const allMobileLinks = [
  { href: "/solucao/iso-9001", label: "ISO 9001" },
  { href: "/solucao/iso-14001", label: "ISO 14001" },
  { href: "/solucao/pbqp-h", label: "PBQP-H" },
  { href: "/solucao/outras-normas", label: "Outras normas" },
  ...mainLinks,
];

export function SiteNavbar() {
  const pathname = usePathname();
  const [solucoesOpen, setSolucoesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolucoesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (pathname?.startsWith("/sign-in") || pathname?.startsWith("/sign-up")) {
    return null;
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.sisteq.com.br";
  const loginUrl = appUrl;
  const clerkEnabled = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur"
      style={{ backgroundColor: "rgba(11,31,75,0.95)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={logoSisteq}
              alt="SisteQ"
              priority
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {/* Soluções dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setSolucoesOpen((v) => !v)}
                className="flex items-center gap-1 text-sm font-medium text-white/75 hover:text-white transition-colors"
              >
                Soluções
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${solucoesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {solucoesOpen && (
                <div className="absolute left-0 top-full mt-3 w-80 rounded-xl bg-white shadow-xl ring-1 ring-black/5 py-2">
                  {solutions.map((s) => {
                    const Icon = s.icon;
                    return (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setSolucoesOpen(false)}
                        className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                      >
                        <span
                          className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                          style={{ backgroundColor: s.iconBg }}
                        >
                          <Icon className="h-4 w-4" style={{ color: s.iconColor }} />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-gray-900">{s.label}</span>
                          <span className="block text-xs text-gray-500 leading-snug mt-0.5">{s.description}</span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {mainLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-white/75 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop buttons */}
          <div className="hidden lg:flex items-center gap-2">
            {!clerkEnabled ? (
              <>
                <Link
                  href={loginUrl}
                  className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#004BA8" }}
                >
                  Login
                </Link>
                <Link
                  href="/demonstracao"
                  className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#1565C0" }}
                >
                  Solicitar demonstração
                </Link>
              </>
            ) : (
              <>
                <SignedOut>
                  <Link
                    href={loginUrl}
                    className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#004BA8" }}
                  >
                    Login
                  </Link>
                  <Link
                    href="/demonstracao"
                    className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#1565C0" }}
                  >
                    Solicitar demonstração
                  </Link>
                </SignedOut>
                <SignedIn>
                  <a
                    href={appUrl}
                    className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white/90 transition-colors hover:text-white border border-white/15 hover:border-white/25"
                  >
                    Abrir app
                  </a>
                  <SignOutButton redirectUrl="/">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                    >
                      Sair
                    </button>
                  </SignOutButton>
                  <UserButton />
                </SignedIn>
              </>
            )}
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                  aria-label="Abrir menu"
                >
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="border-white/10"
                style={{ backgroundColor: "#0B1F4B" }}
              >
                <SheetHeader>
                  <SheetTitle className="text-white">Menu</SheetTitle>
                </SheetHeader>

                <div className="px-4 pb-4 flex flex-col gap-2">
                  {allMobileLinks.map((l) => (
                    <SheetClose asChild key={l.href}>
                      <Link
                        href={l.href}
                        className="rounded-md px-3 py-2 text-sm font-semibold text-white/85 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        {l.label}
                      </Link>
                    </SheetClose>
                  ))}

                  <div className="pt-2 flex flex-col gap-2">
                    {!clerkEnabled ? (
                      <>
                        <SheetClose asChild>
                          <Link
                            href={loginUrl}
                            className="inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                            style={{ backgroundColor: "#004BA8" }}
                          >
                            Login
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link
                            href="/demonstracao"
                            className="inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                            style={{ backgroundColor: "#1565C0" }}
                          >
                            Solicitar demonstração
                          </Link>
                        </SheetClose>
                      </>
                    ) : (
                      <>
                        <SignedOut>
                          <SheetClose asChild>
                            <Link
                              href={loginUrl}
                              className="inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                              style={{ backgroundColor: "#004BA8" }}
                            >
                              Login
                            </Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link
                              href="/demonstracao"
                              className="inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                              style={{ backgroundColor: "#1565C0" }}
                            >
                              Solicitar demonstração
                            </Link>
                          </SheetClose>
                        </SignedOut>
                        <SignedIn>
                          <a
                            href={appUrl}
                            className="inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white/90 transition-colors hover:text-white border border-white/15 hover:border-white/25"
                          >
                            Abrir app
                          </a>
                          <SignOutButton redirectUrl="/">
                            <button
                              type="button"
                              className="inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                            >
                              Sair
                            </button>
                          </SignOutButton>
                        </SignedIn>
                      </>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
