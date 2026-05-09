import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import CadastroPage from "./CadastroPage";

const clerkState = vi.hoisted(() => ({
  loading: false,
  signedIn: false,
  throwInWidget: false,
}));

vi.mock("@clerk/nextjs", () => {
  return {
    ClerkLoaded: ({ children }: any) => (clerkState.loading ? null : <>{children}</>),
    ClerkLoading: ({ children }: any) => (clerkState.loading ? <>{children}</> : null),
    SignedIn: ({ children }: any) => (clerkState.signedIn ? <>{children}</> : null),
    SignedOut: ({ children }: any) => (clerkState.signedIn ? null : <>{children}</>),
    SignUp: (props: any) => {
      if (clerkState.throwInWidget) throw new Error("SignUp crashed");
      return <div data-testid="clerk-signup" data-routing={props.routing} />;
    },
  };
});

vi.mock("@clerk/localizations", () => ({ ptBR: {} }));

describe("CadastroPage", () => {
  it("mostra skeleton durante carregamento do Clerk", () => {
    clerkState.loading = true;
    clerkState.signedIn = false;
    clerkState.throwInWidget = false;

    render(<CadastroPage />);
    expect(screen.getByRole("status", { name: /carregando cadastro/i })).toBeInTheDocument();
  });

  it("renderiza SignUp do Clerk integrado e com routing hash", () => {
    clerkState.loading = false;
    clerkState.signedIn = false;
    clerkState.throwInWidget = false;

    render(<CadastroPage />);
    expect(screen.getByTestId("clerk-signup")).toHaveAttribute("data-routing", "hash");
  });

  it("exibe fallback acessível se o widget do Clerk falhar", () => {
    clerkState.loading = false;
    clerkState.signedIn = false;
    clerkState.throwInWidget = true;

    const windowError = (event: any) => {
      if (String(event?.error?.message ?? "").includes("SignUp crashed")) event.preventDefault();
    };
    window.addEventListener("error", windowError);
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});
    render(<CadastroPage />);
    expect(screen.getByRole("alert")).toHaveTextContent(/não foi possível carregar o cadastro/i);
    consoleError.mockRestore();
    window.removeEventListener("error", windowError);
  });

  it("exibe estado de autenticado sem redirecionar para outra tela", () => {
    clerkState.loading = false;
    clerkState.signedIn = true;
    clerkState.throwInWidget = false;

    process.env.NEXT_PUBLIC_APP_URL = "https://app.example.com";

    render(<CadastroPage />);
    expect(screen.getByText(/cadastro concluído/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /abrir app/i })).toHaveAttribute(
      "href",
      "https://app.example.com"
    );
  });
});
