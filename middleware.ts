import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Skip middleware for image requests
  if (request.nextUrl.pathname.startsWith("/_next/image")) {
    return NextResponse.next();
  }

  // Remove trailing slashes only
  const url = request.nextUrl.clone();
  if (url.pathname.endsWith("/") && url.pathname.length > 1) {
    url.pathname = url.pathname.slice(0, -1);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
