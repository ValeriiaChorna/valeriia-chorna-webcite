import React from 'react';
import ContactsList from '../ContactsList';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headContainer}>
      <span className={styles.headerHi}>Hi, I am</span>
      <h1 className={styles.logo}>Valeriia Chorna</h1>
      <ContactsList />
      <span className={styles.locationText}>Location: Kyiv, Ukraine</span>
    </div>
  </header>
);

export default Header;
