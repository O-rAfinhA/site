import type { Metadata } from "next";
import Home from "./pages/Home";

export const metadata: Metadata = {
  title: "Home",
  alternates: { canonical: "/" },
};

export default function Page() {
  return <Home />;
}

