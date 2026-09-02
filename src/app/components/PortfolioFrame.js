"use client";

import React, { useEffect, useState } from "react";
import styles from "../styles/PortfolioFrame.module.css";
import { portfolioSites, trackPortfolioClick } from "@/utils/portfolio";

const DESKTOP_QUERY = "(min-width: 901px)";

// Desktop-only live preview of one of my portfolio sites. Gated in JS rather
// than with display:none so mobile never fetches the embedded site at all.
// The iframe itself is click-through; the overlaying anchor opens the site.
const PortfolioFrame = ({ site }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(DESKTOP_QUERY);
    const update = () => setIsDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  if (!isDesktop) {
    return null;
  }

  const href = site || portfolioSites[0];

  return (
    <div className={styles.card}>
      <div className={styles.frameWrap}>
        <span className={styles.placeholder}>Loading preview...</span>
        {site && (
          <iframe
            className={styles.frame}
            src={site}
            title="Matthew Trent's portfolio site"
            scrolling="no"
            tabIndex={-1}
            aria-hidden="true"
          />
        )}
        <a
          className={styles.overlay}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Check out my portfolio site"
          onClick={() => trackPortfolioClick("preview", href)}
        />
      </div>
      <a
        className={styles.caption}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackPortfolioClick("preview-caption", href)}
      >
        Check out my portfolio site! -&gt;
      </a>
    </div>
  );
};

export default PortfolioFrame;
