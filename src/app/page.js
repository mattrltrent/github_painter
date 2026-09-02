"use client";

import { useEffect, useState } from "react";
import styles from "../app/styles/page.module.css";
import Graph from "./components/Graph";
import PaletteSelector from "./components/PaletteSelector";
import PortfolioFrame from "./components/PortfolioFrame";
import Title from "./components/Title";
import YearSelector from "./components/YearSelector";
import {
  portfolioSites,
  currentPortfolioSite,
  trackPortfolioClick,
} from "@/utils/portfolio";

export default function Home() {
  // Resolved after mount so the server render and first client render match.
  // The banner, the preview and the post-download prompt all read the same
  // per-load pick.
  const [site, setSite] = useState(null);

  useEffect(() => {
    setSite(currentPortfolioSite());
  }, []);

  useEffect(() => {
    fetch(
      "https://hidden-coast-90561-45544df95b1b.herokuapp.com/api/v1/analytics/?kind=github-painter-view",
      {
        method: "POST",
      }
    )
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => {});
  }, []);

  function bannerClick() {
    fetch(
      "https://hidden-coast-90561-45544df95b1b.herokuapp.com/api/v1/analytics/?kind=hackathon-banner-from-painter-clicked",
      {
        method: "POST",
      }
    )
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => {});
  }

  return (
      <div className={styles.all}>
        <div >
          <a 
            className={styles.banner}
            target="_blank"
            rel="noopener noreferrer"
            href={site || portfolioSites[0]}
            onClick={() =>
              trackPortfolioClick("banner", site || portfolioSites[0])
            }
          >
            <b>
             Made by Matthew Trent (check out my site!)
            </b>
          </a>
        </div>
        <main className={styles.main}>
          <div className={styles.intro}>
            <div className={styles.introText}>
              <Title />
            </div>
            <PortfolioFrame site={site} />
          </div>
          <YearSelector />
          <Graph />
          <PaletteSelector />
        </main>
      </div>
  );
}
