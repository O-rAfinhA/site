import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import SignUpClient from "./SignUpClient";

const clerkState = vi.hoisted(() => ({
  loading: false,
  throwInWidget: false,
}));

vi.mock("@clerk/nextjs", () => {
  return {
    ClerkLoaded: ({ children }: any) => (clerkState.loading ? null : <>{children}</>),
    ClerkLoading: ({ children }: any) => (clerkState.loading ? <>{children}</> : null),
    SignUp: (props: any) => {
      if (clerkState.throwInWidget) throw new Error("SignUp crashed");
      return <div data-testid="clerk-signup" data-path={props.path} data-routing={props.routing} />;
    },
  };
});

describe("SignUpClient", () => {
  it("shows skeleton while Clerk is loading", () => {
    clerkState.loading = true;
    clerkState.throwInWidget = false;

    render(<SignUpClient />);
    expect(screen.getByRole("status", { name: /carregando cadastro/i })).toBeInTheDocument();
  });

  it("renders Clerk SignUp widget with path routing", () => {
    clerkState.loading = false;
    clerkState.throwInWidget = false;

    render(<SignUpClient />);
    expect(screen.getByTestId("clerk-signup")).toHaveAttribute("data-routing", "path");
    expect(screen.getByTestId("clerk-signup")).toHaveAttribute("data-path", "/sign-up");
  });

  it("renders accessible fallback if Clerk widget crashes", () => {
    clerkState.loading = false;
    clerkState.throwInWidget = true;

    const windowError = (event: any) => {
      if (String(event?.error?.message ?? "").includes("SignUp crashed")) event.preventDefault();
    };
    window.addEventListener("error", windowError);
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});

    render(<SignUpClient />);
    expect(screen.getByRole("alert")).toHaveTextContent(/não foi possível carregar o cadastro/i);

    consoleError.mockRestore();
    window.removeEventListener("error", windowError);
  });
});

