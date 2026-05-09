import type { Metadata } from "next";
import ContactPage from "../pages/ContactPage";

export const metadata: Metadata = {
  title: "Contato",
  alternates: { canonical: "/contato" },
};

export default function Page() {
  return <ContactPage />;
}

