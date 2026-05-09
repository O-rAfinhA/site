import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import CadastroPage from "../pages/CadastroPage";

export const metadata: Metadata = {
  title: "Cadastro",
  alternates: { canonical: "/cadastro" },
};

export const dynamic = "force-dynamic";

export default function Page() {
  const hasClerkKey = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);
  if (!hasClerkKey) {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.sisteq.com.br";
    const signUpPath = process.env.NEXT_PUBLIC_CLERK_SIGN_UP_PATH ?? "/sign-up";

    permanentRedirect(`${appUrl}${signUpPath}`);
  }

  return <CadastroPage />;
}
