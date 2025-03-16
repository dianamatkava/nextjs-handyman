import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host") || "";

  // Redirect non-www to www
  if (!hostname.startsWith("www.") && process.env.NODE_ENV === "production") {
    url.protocol = "https";
    url.host = `www.${hostname}`;
    return NextResponse.redirect(url);
  }

  // Remove trailing slashes
  if (url.pathname.endsWith("/") && url.pathname.length > 1) {
    url.pathname = url.pathname.slice(0, -1);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api|_next|static|[\\w-]+\\.\\w+).*)",
  ],
};
