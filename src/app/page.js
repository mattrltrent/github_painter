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
      .then((data) => {
      })
      .catch((error) => {
      });
  }, []); 

  function bannerClick() {
    fetch(
      "https://hidden-coast-90561-45544df95b1b.herokuapp.com/api/v1/analytics/?kind=hackathon-banner-from-painter-clicked",
      {
        method: "POST",
      }
    )
      .then((response) => response.json())
      .then((data) => {
      })
      .catch((error) => {
      });
    }

  return (
    <div className={styles.all}>
      <div  className={styles.banner}>
        <a  onClick={(e) => { 
          e.preventDefault();
          bannerClick(); 
          window.open('https://matthewtrent.me/covehack/summer-2024', '_blank'); 
        }}  target="_blank" href='javascript:;'><b>I&apos;m hosting a free virtual HACKATHON August 17/18, click to join and RSVP 🚀</b></a>
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