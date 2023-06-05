"use client";

import styles from "../app/styles/page.module.css"
import Graph from './components/Graph';
import TextButton from "./components/TextButton";


import PaletteSelector from "./components/PaletteSelector";
import Title from "./components/Title";
import YearSelector from "./components/YearSelector";

export default function Home() {
  return (
    <main className={styles.main}>
      <Title />
      <YearSelector />
      <Graph />
      <PaletteSelector />
      <span className={styles.center}>Use at your own risk, made in one day.</span>
    </main>
  )
}
