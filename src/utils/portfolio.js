export const portfolioSites = [
  "https://matthewtrent.vercel.app/",
  "https://site-git-main-mattrltrents-projects.vercel.app/",
  "https://matthewtrent.me",
];

let chosen = null;

// Picked once per page load and then reused, so the banner, the desktop preview
// and the post-download prompt all point at the same site. Only ever call this
// from an effect or an event handler, never during render, or the server and
// client would disagree on which site was picked.
export function currentPortfolioSite() {
  if (!chosen) {
    chosen = portfolioSites[Math.floor(Math.random() * portfolioSites.length)];
  }
  return chosen;
}
