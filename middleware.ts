// middleware.ts (Painter project)
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const PERSONAL_HOSTS = new Set(['matthewtrent.me', 'www.matthewtrent.me']);
const PAINTER_HOSTS = new Set(['github-painter.vercel.app']);

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') || '';
  const xfh = req.headers.get('x-forwarded-host') || '';

  // If this request came from your personal domain (rewrite/proxy),
  // DO NOT redirect — serving content avoids loops.
  if (PERSONAL_HOSTS.has(host) || PERSONAL_HOSTS.has(xfh)) {
    return NextResponse.next();
  }

  // If a user truly visits the Painter origin, push them to your personal path.
  if (PAINTER_HOSTS.has(host)) {
    const url = new URL(req.url);
    const target = new URL(`https://matthewtrent.me/p/github-painter${url.pathname}${url.search}`);
    return NextResponse.redirect(target, 302);
  }

  return NextResponse.next();
}

// Skip static assets and Next internals.
export const config = {
  matcher: [
    '/((?!_next/|favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest).*)',
  ],
};