/** @type {import('next').NextConfig} */

// matthewtrent.me rewrites /p/github-painter/* to this app, but it does NOT
// proxy /_next/*, so relative asset URLs 404 there and the page ships with zero
// JS (no hydration, no analytics, no palette clicks). Point assets at this
// app's own origin on production deploys so the proxied page can load them.
// Left off locally and on previews, where relative URLs already resolve to the
// build that is actually running.
const isVercelProd = process.env.VERCEL_ENV === "production";

module.exports = {
  assetPrefix: isVercelProd ? "https://github-painter.vercel.app" : undefined,
  images: { remotePatterns: [{ protocol: "https", hostname: "**" }] },
};
