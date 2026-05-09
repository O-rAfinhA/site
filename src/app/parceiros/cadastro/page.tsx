import type { Metadata } from "next";
import PartnerSignupPage from "../../pages/PartnerSignupPage";

export const metadata: Metadata = {
  title: "Cadastro de Parceiro",
  alternates: { canonical: "/parceiros/cadastro" },
};

export default function Page() {
  return <PartnerSignupPage />;
}

