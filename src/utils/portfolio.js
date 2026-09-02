export const portfolioSites = [
  "https://matthewtrent.vercel.app/",
  "https://site-git-main-mattrltrents-projects.vercel.app/",
  "https://matthewtrent.me",
];

// Labels for the A/B test. Keyed by the exact strings above so a typo in one
// of them shows up as "unknown" in the notification rather than silently
// mislabelling a variant.
const siteVariants = {
  "https://matthewtrent.vercel.app/": "v1",
  "https://site-git-main-mattrltrents-projects.vercel.app/": "v2",
  "https://matthewtrent.me": "v3",
};

const ANALYTICS = "https://hidden-coast-90561-45544df95b1b.herokuapp.com/api/v1/analytics/";

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

export function portfolioVariant(site) {
  return siteVariants[site] || "unknown";
}

// Fires the "which portfolio variant got clicked" notification. `where` names
// the entry point (banner / preview / download prompt); `site` should be the
// href the click is actually about to open, which can differ from the per-load
// pick during the first paint before the pick has been handed down.
export function trackPortfolioClick(where, site) {
  const target = site || currentPortfolioSite();
  const extra = encodeURIComponent(
    `portfolio clicked; type=${portfolioVariant(target)}; from=${where}; url=${target}`
  );

  fetch(`${ANALYTICS}?kind=github-painter-portfolio-clicked&extra=${extra}`, {
    method: "POST",
    // The click usually opens a new tab, but keepalive means the ping still
    // lands if the browser ever tears this page down first.
    keepalive: true,
  })
    .then((response) => response.json())
    .then((data) => {})
    .catch((error) => {});
}
