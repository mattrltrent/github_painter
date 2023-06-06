
import React from 'react';
import styles from '../styles/Title.module.css';

const Title = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=inter&display=swap"
        rel="stylesheet"
      />
      <h1 className={styles.title}>GitHub Contribution Graph Painter</h1>
      <h2 className={styles.subtitle}>
        Embrace your inner Picasso. Made in one day, so use at your own risk.
      </h2>
    </>
  );
};

export default Title;
