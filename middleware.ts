// middleware.ts at the root of the Painter project
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const PERSONAL = new Set(['matthewtrent.me', 'www.matthewtrent.me']);
const PAINTER  = new Set(['github-painter.vercel.app']);

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') || '';
  const xfh  = req.headers.get('x-forwarded-host') || '';

  // If the request is coming via your personal site's rewrite, DO NOT redirect
  if (PERSONAL.has(host) || PERSONAL.has(xfh)) {
    return NextResponse.next();
  }

  // If a user is directly on the Painter origin, redirect them to your personal path
  if (PAINTER.has(host)) {
    const u = new URL(req.url);
    return NextResponse.redirect(
      `https://matthewtrent.me/p/github-painter${u.pathname}${u.search}`,
      302
    );
  }

  return NextResponse.next();
}

// Skip static assets & Next internals
export const config = {
  matcher: ['/((?!_next/|favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest).*)'],
};
