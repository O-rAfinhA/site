import type { Metadata } from "next";
import ISO9001Page from "../../pages/ISO9001Page";

export const metadata: Metadata = {
  title: "ISO 9001",
  alternates: { canonical: "/solucao/iso-9001" },
};

export default function Page() {
  return <ISO9001Page />;
}

