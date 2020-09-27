import React from 'react';
import styles from './MainInfo.module.css';

export default function MainInfo() {
  return (
    <div className={styles.MainInfo}>
      <h1>VALERIIA CHORNA - FULL STACK DEVELOPER</h1>
      <span>Location: Kyiv, Ukraine</span>
      <h3>Contacts:</h3>
      <span>
        <a
          href="mailto:valeria.chyornaya@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          valeria.chyornaya@gmail.com
        </a>
      </span>
      <span>
        <a
          href="https://www.linkedin.com/in/valeriia-chorna-a6a2a461/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn Profile
        </a>
      </span>
      <span>
        <a
          href="https://github.com/ValeriiaChorna"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </span>
      <span>
        <a
          href="https://t.me/Valeriia_Chorna"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a>
      </span>
    </div>
  );
}
