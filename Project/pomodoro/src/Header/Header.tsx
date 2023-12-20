import React from 'react';
import styles from './header.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src="" alt="Логотип Pomodoro" />
      <a className={styles.statistics} href="">Статистика</a>
    </header>
  );
}
