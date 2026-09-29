import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "./components/site/SiteFooter";
import { SiteNavbar } from "./components/site/SiteNavbar";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";

const GTM_ID = "GTM-MTSCH39V";

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
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body
        className="min-h-screen"
        style={{ fontFamily: "Inter, Arial, Helvetica, sans-serif" }}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
