import type { Metadata } from "next";
import Home from "./pages/Home";

export const metadata: Metadata = {
  title: { absolute: "SisteQ | Gestão de ISO 9001, ISO 14001 e PBQP-H" },
  alternates: { canonical: "/" },
};

export default function Page() {
  return <Home />;
}

