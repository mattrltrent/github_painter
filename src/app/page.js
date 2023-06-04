"use client";

import styles from "../app/styles/page.module.css"
import Graph from './components/Graph';


import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './../redux/features/counter/counterSlice'

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main className={styles.main}>
      <button className={styles.button} onClick={() => dispatch(increment())}>Increment</button>
      <span>{count}</span>
      <Graph />
      <button className={styles.button} onClick={() => dispatch(decrement())}>Decrement</button>
      <button className={styles.button} onClick={() => dispatch(incrementByAmount(2))}>Inc by 2</button>
    </main>
  )
}
