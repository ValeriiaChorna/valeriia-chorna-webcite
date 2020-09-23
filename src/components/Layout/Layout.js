import React from 'react';
import styles from './Layout.module.css';
import Header from '../Header';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.banner}>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
