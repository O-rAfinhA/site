import type { Metadata } from "next";
import PlatformPage from "../pages/PlatformPage";

export const metadata: Metadata = {
  title: "Plataforma",
  alternates: { canonical: "/plataforma" },
};

export default function Page() {
  return <PlatformPage />;
}

