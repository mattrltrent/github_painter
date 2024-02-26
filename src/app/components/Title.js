
import React from 'react';
import styles from '../styles/Title.module.css';
import Head from 'next/head';

const Title = () => {
  return (
    <>
      <Head>
        <title>GitHub Contribution Graph Painter</title>
        <meta name="description" content="Embrace your inner Picasso. Allows you to customize your GitHub painter." />
        <meta name="keywords" content="GitHub, Contribution, Graph, Painter, Customize, Customize GitHub, GitHub Painter, GitHub Contribution Graph Painter" />
        <meta name="author" content="Matthew Trent" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <link
        href="https://fonts.googleapis.com/css2?family=inter&display=swap"
        rel="stylesheet"
      />
      <h1 className={styles.title}>GitHub Contribution Graph Painter</h1>
      <h2 className={styles.subtitle}>
        <a className={styles.star} target='_blank' href='https://github.com/mattrltrent/github_painter'>Starring the project on GitHub ⭐️</a> means the world to me. Built in one evening! 🌌
      </h2>
    </>
  );
};

export default Title;
