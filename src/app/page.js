"use client";

import styles from "../app/styles/page.module.css"
import Graph from './components/Graph';


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
    </main>
  )
}
