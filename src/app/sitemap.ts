import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const now = new Date();

  const routes = [
    "",
    "/solucao/iso-9001",
    "/solucao/iso-14001",
    "/solucao/pbqp-h",
    "/solucao/outras-normas",
    "/plataforma",
    "/planos",
    "/parceiros",
    "/parceiros/cadastro",
    "/demonstracao",
    "/contato",
    "/conteudos",
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
  }));
}
