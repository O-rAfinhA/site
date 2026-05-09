import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "./components/site/SiteFooter";
import { SiteNavbar } from "./components/site/SiteNavbar";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "SisteQ",
    template: "%s | SisteQ",
  },
  description:
    "Plataforma para implantar, manter e evoluir certificações com menos planilhas, mais rastreabilidade e gestão integrada.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "SisteQ",
    locale: "pt_BR",
    url: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  const content = (
    <html lang="pt-BR">
      <body
        className="min-h-screen"
        style={{ fontFamily: "Inter, Arial, Helvetica, sans-serif" }}
      >
        <SiteNavbar />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );

  if (!clerkPublishableKey) {
    return content;
  }

  return (
    <ClerkProvider publishableKey={clerkPublishableKey} localization={ptBR}>
      {content}
    </ClerkProvider>
  );
}
