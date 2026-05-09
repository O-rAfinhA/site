import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import LoginPage from "../pages/LoginPage";

export const metadata: Metadata = {
  title: "Login",
  alternates: { canonical: "/login" },
};

export const dynamic = "force-dynamic";

export default function Page() {
  const hasClerkKey = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);
  if (!hasClerkKey) {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.sisteq.com.br";
  const signInPath = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_PATH ?? "/sign-in";

  permanentRedirect(`${appUrl}${signInPath}`);
  }

  return <LoginPage />;
}
