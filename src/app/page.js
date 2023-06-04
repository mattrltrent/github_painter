"use client";

import Image from 'next/image'
import styles from "../app/page.module.css"

import { RootState } from "./../redux/store"
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './../redux/features/counter/counterSlice'

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main className={styles.main}>
      <button className={styles.button} onClick={() => dispatch(increment())}>Increment</button>
      <span>{count}</span>
      <button className={styles.button} onClick={() => dispatch(decrement())}>Decrement</button>
      <button className={styles.button} onClick={() => dispatch(incrementByAmount(2))}>Inc by 2</button>
    </main>
  )
}
