// middleware.ts (Painter project)
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const PERSONAL = new Set(['matthewtrent.me', 'www.matthewtrent.me']);
const PAINTER  = new Set(['github-painter.vercel.app']);

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') || '';
  const xfh  = req.headers.get('x-forwarded-host') || '';
  const url  = new URL(req.url);

  console.log('Middleware hit:', { 
    host, 
    xfh, 
    pathname: url.pathname,
    isPersonalProxy: PERSONAL.has(xfh),
    isPainterHost: PAINTER.has(host)
  });

  // If the request is being proxied from your personal site, DO NOT redirect (avoids loops)
  // Vercel automatically sets x-forwarded-host to the original domain during external rewrites
  if (PERSONAL.has(xfh)) {
    console.log('Proxied request detected, allowing through');
    return NextResponse.next();
  }

  // If a user is directly on the Painter origin, redirect to personal site
  if (PAINTER.has(host)) {
    const path = `/p/github-painter${url.pathname === '/' ? '' : url.pathname}`;
    console.log('Redirecting to:', `https://matthewtrent.me${path}${url.search}`);
    return NextResponse.redirect(`https://matthewtrent.me${path}${url.search}`, 302);
  }

  // Internal rewrite: /p/github-painter/* -> /*
  if (url.pathname.startsWith('/p/github-painter')) {
    const newPath = url.pathname.replace('/p/github-painter', '') || '/';
    return NextResponse.rewrite(new URL(newPath + url.search, req.url));
  }

  return NextResponse.next();
}

// Skip Next internals/static
export const config = {
  matcher: ['/((?!_next/|favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest).*)'],
};
