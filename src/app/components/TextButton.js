
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/TextButton.module.css';

const TextButton = ({ text, onClick, highlighted, star }) => {
  return (
    <span className={[styles.textButton, highlighted ? styles.star : null, star ? styles.yellow : null].join(" ")} onClick={onClick}>
      {text}
    </span>
  );
};

TextButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  highlighted: PropTypes.bool,
};

export default TextButton;
