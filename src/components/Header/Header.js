import React from 'react';
import styles from './Header.module.css';

const Header = () => (
  <header className="header">
    <div className={'headContainer'}>
      <h2 className={styles.logo}>Valeriia Chorna</h2>
      {/* <Logo />
        <Navigation />
        <ButtonThemeChanger /> */}
    </div>
  </header>
);

export default Header;
