
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/TextButton.module.css';

const TextButton = ({ text, onClick, highlighted }) => {
  return (
    <span className={[styles.textButton, highlighted ? styles.star : null].join(" ")} onClick={onClick}>
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
