import type { Metadata } from "next";
import ContentPage from "../pages/ContentPage";

export const metadata: Metadata = {
  title: "Conteúdos",
  alternates: { canonical: "/conteudos" },
};

export default function Page() {
  return <ContentPage />;
}

