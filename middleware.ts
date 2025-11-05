// middleware.ts (Painter project)
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const PERSONAL = new Set(['matthewtrent.me', 'www.matthewtrent.me']);
const PAINTER  = new Set(['github-painter.vercel.app']);

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') || '';
  const xfh  = req.headers.get('x-forwarded-host') || '';
  const url  = new URL(req.url);

  // If the request is arriving via your personal site's rewrite, DO NOT redirect (avoids loops)
  if (PERSONAL.has(host) || PERSONAL.has(xfh)) return NextResponse.next();

  // If a user is directly on the Painter origin, send them to your personal path
  if (PAINTER.has(host)) {
    const path = url.pathname.startsWith('/p/github-painter')
      ? url.pathname // already on basePath; keep it
      : `/p/github-painter${url.pathname}`;
    return NextResponse.redirect(`https://matthewtrent.me${path}${url.search}`, 302);
  }

  return NextResponse.next();
}

// Skip Next internals/static
export const config = {
  matcher: ['/((?!_next/|favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest).*)'],
};
