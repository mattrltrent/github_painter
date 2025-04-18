"use client";

import { useEffect } from "react";
import styles from "../app/styles/page.module.css";
import Graph from "./components/Graph";
import PaletteSelector from "./components/PaletteSelector";
import Title from "./components/Title";
import YearSelector from "./components/YearSelector";

export default function Home() {
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
            href="https://matthewtrent.me/resume.pdf"
          >
            <b>
             Looking for a Software Engineering Intern? Check out my resume!
            </b>
          </a>
        </div>
        <main className={styles.main}>
          <Title />
          <YearSelector />
          <Graph />
          <PaletteSelector />
        </main>
      </div>
  );
}
