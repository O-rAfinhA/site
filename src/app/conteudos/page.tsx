import type { Metadata } from "next";
import ContentPage from "../pages/ContentPage";
import { getArtigos } from "@/lib/artigos";
import { getMateriais } from "@/lib/materiais";

export const metadata: Metadata = {
  title: "Conteúdos",
  alternates: { canonical: "/conteudos" },
};

export default function Page() {
  const artigos = getArtigos();
  const materiais = getMateriais();
  return <ContentPage artigos={artigos} materiais={materiais} />;
}
