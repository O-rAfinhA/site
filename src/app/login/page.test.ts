import { describe, expect, it, vi } from "vitest";

describe("/login redirect", () => {
  it("redirects to /sign-in when Clerk is enabled", async () => {
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
      expect(String(err?.message)).toBe("REDIRECT:/sign-in");
    }
  });

  it("redirects to external app sign-in when Clerk is disabled", async () => {
    vi.resetModules();
    vi.doMock("next/navigation", () => ({
      permanentRedirect: (url: string) => {
        throw new Error(`REDIRECT:${url}`);
      },
    }));

    delete process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
    process.env.NEXT_PUBLIC_APP_URL = "https://app.example.com";
    process.env.NEXT_PUBLIC_CLERK_SIGN_IN_PATH = "/sign-in";

    const mod = await import("./page");
    try {
      mod.default();
      expect.fail("Expected redirect");
    } catch (err: any) {
      expect(String(err?.message)).toBe("REDIRECT:https://app.example.com/sign-in");
    }
  });
});

