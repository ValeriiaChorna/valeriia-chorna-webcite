import React from 'react';
import { ReactComponent as IconGmail } from '../../img/icons/gmail-envelope.svg';
import { ReactComponent as IconLinkIn } from '../../img/icons/linkedin-sign.svg';
import { ReactComponent as IconGithub } from '../../img/icons/github-logo.svg';
import { ReactComponent as IconFacebook } from '../../img/icons/facebook-circular-logo.svg';
import { ReactComponent as IconTelegram } from '../../img/icons/telegram.svg';
import styles from './ContactsList.module.css';

export default function MainInfo() {
  return (
    <div className={styles.contactsWrapper}>
      <a
        className={styles.contactsLink}
        href="mailto:valeria.chyornaya@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconGmail className={styles.iconImg} />
        {/* valeria.chyornaya@gmail.com */}
      </a>
      <a
        className={styles.contactsLink}
        href="https://www.linkedin.com/in/valeriia-chorna-a6a2a461/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconLinkIn className={styles.iconImg} />
      </a>
      <a
        className={styles.contactsLink}
        href="https://github.com/ValeriiaChorna"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconGithub className={styles.iconImg} />
      </a>
      <a
        className={styles.contactsLink}
        href="https://www.facebook.com/profile.php?id=100001608626390"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconFacebook className={styles.iconImg} />
      </a>
      <a
        className={styles.contactsLink}
        href="https://t.me/Valeriia_Chorna"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconTelegram className={styles.iconImg} />
      </a>
    </div>
  );
}
