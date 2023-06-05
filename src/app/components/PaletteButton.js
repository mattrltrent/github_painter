import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './../styles/PaletteButton.module.css';

const PaletteButton = ({ color, selected, onClick, text }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    onClick();
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className={styles.column}>
      <link
        href="https://fonts.googleapis.com/css2?family=inter&display=swap"
        rel="stylesheet"
      />
      <button
        className={`${styles['palette-button']} ${
          selected ? styles.selected : ''
        } ${isAnimating ? styles.animating : ''}`}
        onClick={handleClick}
        style={{
          backgroundColor: color,
          border: selected ? '3px solid white' : '0px solid #292929',
        }}

      >
        {selected && <span className={styles['selected-indicator']} />}
      </button>
      <span className={selected ? styles.textSelected : styles.textNotSelected}>{text}</span>
    </div>
  );
};

PaletteButton.propTypes = {
  color: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default PaletteButton;
