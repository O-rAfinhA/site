import type { Metadata } from "next";
import PartnersPage from "../pages/PartnersPage";

export const metadata: Metadata = {
  title: "Parceiros",
  alternates: { canonical: "/parceiros" },
};

export default function Page() {
  return <PartnersPage />;
}

