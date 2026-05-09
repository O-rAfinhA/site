import type { Metadata } from "next";
import DemoPage from "../pages/DemoPage";

export const metadata: Metadata = {
  title: "Demonstração",
  alternates: { canonical: "/demonstracao" },
};

export default function Page() {
  return <DemoPage />;
}

