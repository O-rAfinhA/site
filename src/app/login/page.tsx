import type { Metadata } from "next";
import LoginPage from "../pages/LoginPage";

export const metadata: Metadata = {
  title: "Login",
  alternates: { canonical: "/login" },
};

export const dynamic = "force-dynamic";

export default function Page() {
  const hasClerkKey = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);
  return <LoginPage clerkEnabled={hasClerkKey} />;
}
