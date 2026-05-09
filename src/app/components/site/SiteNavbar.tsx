"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
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

const navLinks = [
  { href: "/solucao/iso-9001", label: "ISO 9001" },
  { href: "/solucao/iso-14001", label: "ISO 14001" },
  { href: "/solucao/pbqp-h", label: "PBQP-H" },
  { href: "/solucao/outras-normas", label: "Outras normas" },
  { href: "/plataforma", label: "Plataforma" },
  { href: "/planos", label: "Planos" },
  { href: "/parceiros", label: "Parceiros" },
  { href: "/conteudos", label: "Conteúdos" },
  { href: "/contato", label: "Contato" },
];

export function SiteNavbar() {
  const loginUrl = "/sign-in";
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.sisteq.com.br";
  const clerkEnabled = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur"
      style={{ backgroundColor: "rgba(11,31,75,0.78)" }}
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

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-white/75 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden lg:flex">
              {!clerkEnabled ? (
                <Link
                  href={loginUrl}
                  className="inline-flex items-center justify-center rounded px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#004BA8" }}
                >
                  Login
                </Link>
              ) : (
                <>
                  <SignedOut>
                    <Link
                      href={loginUrl}
                      className="inline-flex items-center justify-center rounded px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                      style={{ backgroundColor: "#004BA8" }}
                    >
                      Login
                    </Link>
                  </SignedOut>
                  <SignedIn>
                    <div className="flex items-center gap-3">
                      <a
                        href={appUrl}
                        className="inline-flex items-center justify-center rounded px-4 py-2 text-sm font-semibold text-white/90 transition-colors hover:text-white border border-white/15 hover:border-white/25"
                      >
                        Abrir app
                      </a>
                      <SignOutButton redirectUrl="/">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center rounded px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                        >
                          Sair
                        </button>
                      </SignOutButton>
                      <UserButton />
                    </div>
                  </SignedIn>
                </>
              )}
            </div>

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
                    {navLinks.map((l) => (
                      <SheetClose asChild key={l.href}>
                        <Link
                          href={l.href}
                          className="rounded-md px-3 py-2 text-sm font-semibold text-white/85 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          {l.label}
                        </Link>
                      </SheetClose>
                    ))}

                    <div className="pt-2">
                      {!clerkEnabled ? (
                        <SheetClose asChild>
                          <Link
                            href={loginUrl}
                            className="inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                            style={{ backgroundColor: "#004BA8" }}
                          >
                            Login
                          </Link>
                        </SheetClose>
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
                          </SignedOut>
                          <SignedIn>
                            <div className="flex flex-col gap-2">
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
                            </div>
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
      </div>
    </header>
  );
}
