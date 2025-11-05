/** @type {import('next').NextConfig} */
module.exports = {
  basePath: "/p/github-painter",
  assetPrefix: "/p/github-painter",
  images: { remotePatterns: [{ protocol: "https", hostname: "**" }] },
};
