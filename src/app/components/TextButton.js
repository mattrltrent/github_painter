
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/TextButton.module.css';

const TextButton = ({ text, onClick }) => {
  return (
    <span className={styles.textButton} onClick={onClick}>
      {text}
    </span>
  );
};

TextButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TextButton;
