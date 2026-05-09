import type { Metadata } from "next";
import CadastroPage from "../pages/CadastroPage";

export const metadata: Metadata = {
  title: "Cadastro",
  alternates: { canonical: "/cadastro" },
};

export const dynamic = "force-dynamic";

export default function Page() {
  const hasClerkKey = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);
  return <CadastroPage clerkEnabled={hasClerkKey} />;
}
