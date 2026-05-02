import { NextResponse, type NextRequest } from "next/server";

/*
  Two-container deployment. Same Next.js image is built once; SITE_MODE env
  switches the runtime gate:

    SITE_MODE=public  (or unset) — serves the public site. /admin and /api/admin
                                    are 404'd so admin code is unreachable on
                                    the public hostname.
    SITE_MODE=admin               — serves /admin and /api/admin only. Everything
                                    else is 404'd so the public site can't be
                                    served from the admin hostname.

  Cloudflare tunnel maps:
    itcareerroadmap.com         → web:3000   (SITE_MODE=public)
    admin.itcareerroadmap.com   → admin:3000 (SITE_MODE=admin)
*/

const PUBLIC_API_ALLOWED_IN_ADMIN = new Set<string>([]); // none for now

export function middleware(req: NextRequest) {
  const mode = process.env.SITE_MODE === "admin" ? "admin" : "public";
  const path = req.nextUrl.pathname;

  const isAdminPath = path.startsWith("/admin") || path.startsWith("/api/admin");

  if (mode === "admin") {
    // Admin container — only /admin* and /api/admin* are served.
    // Root path is redirected to the login page so visitors don't see a bare 404.
    if (path === "/" || path === "") {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
    if (!isAdminPath) {
      return new NextResponse(null, { status: 404 });
    }
  } else {
    // Public container — block /admin* and /api/admin*
    if (isAdminPath) {
      return new NextResponse(null, { status: 404 });
    }
  }

  return NextResponse.next();
}

export const config = {
  // Run on everything except Next.js internals + static assets
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|woff|woff2|css|js|map)$).*)"],
};
