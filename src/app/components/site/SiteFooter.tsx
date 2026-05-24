"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoSisteq from "../../../../logo-sisteq.png";

const footerLinks = [
  { href: "/plataforma", label: "Plataforma" },
  { href: "/planos", label: "Planos" },
  { href: "/parceiros", label: "Parceiros" },
  { href: "/demonstracao", label: "Demonstração" },
  { href: "/contato", label: "Contato" },
];

export function SiteFooter() {
  const pathname = usePathname();
  if (pathname?.startsWith("/sign-in") || pathname?.startsWith("/sign-up")) {
    return null;
  }

  const year = new Date().getFullYear();
  const loginUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.sisteq.com.br";

  return (
    <footer className="border-t" style={{ borderColor: "rgba(255,255,255,0.10)", backgroundColor: "#0B1F4B" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src={logoSisteq}
                alt="SisteQ"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-white/60 text-sm mt-2 max-w-xl">
              Plataforma para implantar, manter e evoluir certificações com menos planilhas, mais rastreabilidade e gestão integrada.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {footerLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-white/70 hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
            <Link href={loginUrl} className="text-sm text-white/70 hover:text-white transition-colors">
              Login
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between border-t" style={{ borderColor: "rgba(255,255,255,0.10)" }}>
          <p className="text-white/50 text-xs">© {year} SisteQ. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
