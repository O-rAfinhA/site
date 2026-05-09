import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import SignInClient from "./SignInClient";

const clerkState = vi.hoisted(() => ({
  loading: false,
  throwInWidget: false,
}));

vi.mock("@clerk/nextjs", () => {
  return {
    ClerkLoaded: ({ children }: any) => (clerkState.loading ? null : <>{children}</>),
    ClerkLoading: ({ children }: any) => (clerkState.loading ? <>{children}</> : null),
    SignIn: (props: any) => {
      if (clerkState.throwInWidget) throw new Error("SignIn crashed");
      return <div data-testid="clerk-signin" data-path={props.path} data-routing={props.routing} />;
    },
  };
});

describe("SignInClient", () => {
  it("shows skeleton while Clerk is loading", () => {
    clerkState.loading = true;
    clerkState.throwInWidget = false;

    render(<SignInClient />);
    expect(screen.getByRole("status", { name: /carregando login/i })).toBeInTheDocument();
  });

  it("renders Clerk SignIn widget with hash routing", () => {
    clerkState.loading = false;
    clerkState.throwInWidget = false;

    render(<SignInClient />);
    expect(screen.getByTestId("clerk-signin")).toHaveAttribute("data-routing", "hash");
  });

  it("renders accessible fallback if Clerk widget crashes", () => {
    clerkState.loading = false;
    clerkState.throwInWidget = true;

    const windowError = (event: any) => {
      if (String(event?.error?.message ?? "").includes("SignIn crashed")) event.preventDefault();
    };
    window.addEventListener("error", windowError);
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});

    render(<SignInClient />);
    expect(screen.getByRole("alert")).toHaveTextContent(/não foi possível carregar o login/i);

    consoleError.mockRestore();
    window.removeEventListener("error", windowError);
  });
});
