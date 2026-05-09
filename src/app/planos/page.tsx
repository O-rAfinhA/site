import type { Metadata } from "next";
import PlansPage from "../pages/PlansPage";

export const metadata: Metadata = {
  title: "Planos",
  alternates: { canonical: "/planos" },
};

export default function Page() {
  return <PlansPage />;
}

