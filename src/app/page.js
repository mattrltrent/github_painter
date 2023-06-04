"use client";

import styles from "../app/styles/page.module.css"
import Graph from './components/Graph';


import PaletteSelector from "./components/PaletteSelector";

export default function Home() {
  return (
    <main className={styles.main}>
      <PaletteSelector />
      <Graph />
    </main>
  )
}
