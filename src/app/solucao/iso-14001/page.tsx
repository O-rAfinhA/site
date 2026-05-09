import type { Metadata } from "next";
import ISO14001Page from "../../pages/ISO14001Page";

export const metadata: Metadata = {
  title: "ISO 14001",
  alternates: { canonical: "/solucao/iso-14001" },
};

export default function Page() {
  return <ISO14001Page />;
}

