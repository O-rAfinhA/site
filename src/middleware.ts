import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname === "/login") {
    if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
      const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.sisteq.com.br";
      const signInPath = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_PATH ?? "/sign-in";
      return NextResponse.redirect(new URL(`${appUrl}${signInPath}`, request.url));
    }

    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  if (pathname === "/cadastro") {
    if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
      const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.sisteq.com.br";
      const signUpPath = process.env.NEXT_PUBLIC_CLERK_SIGN_UP_PATH ?? "/sign-up";
      return NextResponse.redirect(new URL(`${appUrl}${signUpPath}`, request.url));
    }

    return NextResponse.redirect(new URL("/sign-up", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/cadastro"],
};

