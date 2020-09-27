import React from 'react';
import styles from './Layout.module.css';
import Header from '../Header';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
