import type { Metadata } from "next";
import OutrasNormasPage from "../../pages/OutrasNormasPage";

export const metadata: Metadata = {
  title: "Outras Normas",
  alternates: { canonical: "/solucao/outras-normas" },
};

export default function Page() {
  return <OutrasNormasPage />;
}

