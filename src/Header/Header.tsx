import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import { Navigation } from './Navigation';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Link to="pomodoro" >
            <img src="/pomodoro/img/logo.svg" alt="Логотип Pomodoro" />
          </Link>

          <Navigation />
        </div>
      </div>
    </header>
  );
}
