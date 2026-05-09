import { describe, expect, it, vi } from "vitest";

describe("/cadastro redirect", () => {
  it("redirects to /sign-up when Clerk is enabled", async () => {
    vi.resetModules();
    vi.doMock("next/navigation", () => ({
      permanentRedirect: (url: string) => {
        throw new Error(`REDIRECT:${url}`);
      },
    }));

    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = "pk_test";

    const mod = await import("./page");
    try {
      mod.default();
      expect.fail("Expected redirect");
    } catch (err: any) {
      expect(String(err?.message)).toBe("REDIRECT:/sign-up");
    }
  });

  it("redirects to external app sign-up when Clerk is disabled", async () => {
    vi.resetModules();
    vi.doMock("next/navigation", () => ({
      permanentRedirect: (url: string) => {
        throw new Error(`REDIRECT:${url}`);
      },
    }));

    delete process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
    process.env.NEXT_PUBLIC_APP_URL = "https://app.example.com";
    process.env.NEXT_PUBLIC_CLERK_SIGN_UP_PATH = "/sign-up";

    const mod = await import("./page");
    try {
      mod.default();
      expect.fail("Expected redirect");
    } catch (err: any) {
      expect(String(err?.message)).toBe("REDIRECT:https://app.example.com/sign-up");
    }
  });
});

