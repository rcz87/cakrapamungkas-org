import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https://fonts.gstatic.com",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

function addSecurityHeaders(response: NextResponse): NextResponse {
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload"
  );
  response.headers.set("Content-Security-Policy", CSP);
  return response;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Dashboard routes: require auth
  if (pathname.startsWith("/dashboard")) {
    const token = request.cookies.get("admin-token")?.value;

    if (!token) {
      return addSecurityHeaders(
        NextResponse.redirect(new URL("/login", request.url))
      );
    }

    try {
      await jwtVerify(token, JWT_SECRET);
      return addSecurityHeaders(NextResponse.next());
    } catch {
      const response = NextResponse.redirect(new URL("/login", request.url));
      response.cookies.delete("admin-token");
      return addSecurityHeaders(response);
    }
  }

  // All other routes: add security headers only
  return addSecurityHeaders(NextResponse.next());
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|uploads/).*)",
  ],
};
