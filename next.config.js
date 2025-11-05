/** @type {import('next').NextConfig} */
module.exports = {
  assetPrefix: "https://github-painter.vercel.app",
  images: { remotePatterns: [{ protocol: "https", hostname: "**" }] },
};
