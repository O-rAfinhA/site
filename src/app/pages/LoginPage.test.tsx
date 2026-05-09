import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import LoginPage from "./LoginPage";

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
    SignIn: (props: any) => {
      if (clerkState.throwInWidget) throw new Error("SignIn crashed");
      return <div data-testid="clerk-signin" data-routing={props.routing} />;
    },
  };
});

vi.mock("@clerk/localizations", () => ({ ptBR: {} }));

describe("LoginPage", () => {
  it("mostra skeleton durante carregamento do Clerk", () => {
    clerkState.loading = true;
    clerkState.signedIn = false;
    clerkState.throwInWidget = false;

    render(<LoginPage clerkEnabled />);
    expect(screen.getByRole("status", { name: /carregando login/i })).toBeInTheDocument();
  });

  it("renderiza SignIn do Clerk integrado e com routing hash", () => {
    clerkState.loading = false;
    clerkState.signedIn = false;
    clerkState.throwInWidget = false;

    render(<LoginPage clerkEnabled />);
    expect(screen.getByTestId("clerk-signin")).toHaveAttribute("data-routing", "hash");
  });

  it("exibe fallback acessível se o widget do Clerk falhar", () => {
    clerkState.loading = false;
    clerkState.signedIn = false;
    clerkState.throwInWidget = true;

    const windowError = (event: any) => {
      if (String(event?.error?.message ?? "").includes("SignIn crashed")) event.preventDefault();
    };
    window.addEventListener("error", windowError);
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});
    render(<LoginPage clerkEnabled />);
    expect(screen.getByRole("alert")).toHaveTextContent(/não foi possível carregar o login/i);
    consoleError.mockRestore();
    window.removeEventListener("error", windowError);
  });

  it("exibe estado de autenticado sem redirecionar para outra tela", () => {
    clerkState.loading = false;
    clerkState.signedIn = true;
    clerkState.throwInWidget = false;

    process.env.NEXT_PUBLIC_APP_URL = "https://app.example.com";

    render(<LoginPage clerkEnabled />);
    expect(screen.getByText(/login realizado/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /abrir app/i })).toHaveAttribute(
      "href",
      "https://app.example.com"
    );
  });

  it("não redireciona quando Clerk está desabilitado e mostra ação alternativa", () => {
    clerkState.loading = false;
    clerkState.signedIn = false;
    clerkState.throwInWidget = false;

    process.env.NEXT_PUBLIC_APP_URL = "https://app.example.com";
    process.env.NEXT_PUBLIC_CLERK_SIGN_IN_PATH = "/sign-in";

    render(<LoginPage clerkEnabled={false} />);
    expect(screen.getByRole("alert")).toHaveTextContent(/login indisponível no site/i);
    expect(screen.getByRole("link", { name: /ir para o login/i })).toHaveAttribute(
      "href",
      "https://app.example.com/sign-in"
    );
  });
});
