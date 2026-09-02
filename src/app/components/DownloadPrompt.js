"use client";

import React, { useEffect } from "react";
import styles from "../styles/DownloadPrompt.module.css";
import { currentPortfolioSite } from "@/utils/portfolio";

const DownloadPrompt = ({ onClose }) => {
  // Graph listens for keydown on window, where Escape clears the whole board.
  // Swallow keys in the capture phase while this is up so someone dismissing
  // the prompt with Escape doesn't wipe the art they just downloaded.
  useEffect(() => {
    const swallow = (event) => {
      event.stopPropagation();
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", swallow, true);
    return () => window.removeEventListener("keydown", swallow, true);
  }, [onClose]);

  const openPortfolio = () => {
    fetch(
      "https://hidden-coast-90561-45544df95b1b.herokuapp.com/api/v1/analytics/?kind=github-painter-portfolio-from-download-clicked",
      {
        method: "POST",
      }
    )
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => {});

    window.open(currentPortfolioSite(), "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={styles.card}
        role="dialog"
        aria-modal="true"
        aria-label="Download complete"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 className={styles.heading}>Downloaded! &#9989;</h2>
        <p className={styles.body}>
          Try checking out my portfolio site! I love seeing what people think of
          it :)
        </p>
        <button className={styles.primary} onClick={openPortfolio}>
          Check out my portfolio site -&gt;
        </button>
        <button className={styles.secondary} onClick={onClose}>
          No thanks
        </button>
      </div>
    </div>
  );
};

export default DownloadPrompt;
