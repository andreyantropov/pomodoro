import React from 'react';
import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img src="/img/logo.svg" alt="Логотип Pomodoro" />
          <a className={styles.statistics} href="">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="equalizer" clip-path="url(#clip0_23511_232)">
                <path id="Vector" d="M10 20H14V4H10V20ZM4 20H8V12H4V20ZM16 9V20H20V9H16Z" fill="#DC3E22"/>
              </g>
              <defs>
                <clipPath id="clip0_23511_232">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            Статистика
          </a>
        </div>
      </div>
    </header>
  );
}
