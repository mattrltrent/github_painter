
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
      <h1 className={styles.h1}>GitHub Painter</h1>

      {/* <h1 className={styles.title}>GitHub Contribution Graph Painter</h1> */}
      {/* <h2 className={styles.subtitle}><a className={styles.star} target='_blank' href='https://github.com/mattrltrent/github_painter'>Starring ⭐️</a> the project on GitHub means the world to me. Built in one evening! 🌌 */}
      {/* </h2> */}
      <ol className={[styles.bottomPadding].join(" ")}>
        <li className={styles.light}>1. Enter your GitHub repository URL <b>exactly how the hint says</b> &#38; select year</li>
        <li className={styles.light}>2. Paint the graph</li>
        <li className={styles.light}>3. Click <span className={styles.highlight}>&quot;Download script -&gt;&quot;</span></li>
        <li className={styles.light}>4. Go to the directory in your terminal where you downloaded the script</li>
        <li className={styles.light}>5. Run <span className={styles.code}>chmod 701 github_painter.sh ; sudo ./github_painter.sh</span></li>
      </ol>
    </>
  );
};

export default Title;
