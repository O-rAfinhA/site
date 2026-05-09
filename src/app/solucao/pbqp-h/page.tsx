import type { Metadata } from "next";
import PBQPHPage from "../../pages/PBQPHPage";

export const metadata: Metadata = {
  title: "PBQP-H",
  alternates: { canonical: "/solucao/pbqp-h" },
};

export default function Page() {
  return <PBQPHPage />;
}

