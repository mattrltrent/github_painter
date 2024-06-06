
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './../styles/PaletteButton.module.css';
import { backgroundGray } from '@/utils/constants';

const PaletteButton = ({ color, selected, onClick, text }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (isAnimating) {
      const animationTimer = setTimeout(() => {
        setIsAnimating(false);
      }, 300);

      return () => clearTimeout(animationTimer);
    }
  }, [isAnimating]);

  const handleClick = () => {
    setIsAnimating(true);
    onClick();
    buttonRef.current.classList.add(styles.animating);
    setTimeout(() => {
      buttonRef.current.classList.remove(styles.animating);
    }, 300);
  };

  return (
    <div className={styles.column}>
      {/* <link href="https://fonts.googleapis.com/css2?family=inter&display=swap" rel="stylesheet" /> */}
      <button
        ref={buttonRef}
        className={`${styles['palette-button']} ${selected ? styles.selected : ''}`}
        onClick={handleClick}
        style={{
          backgroundColor: color,
          border: selected ? '3px solid white' : `0px solid ${backgroundGray}`,
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
