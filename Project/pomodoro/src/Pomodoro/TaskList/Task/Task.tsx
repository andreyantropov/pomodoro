import React from 'react';
import styles from './task.module.css';

export function Task() {
  return (
    <li className={styles.taskComponent}>
      <div className={styles.taskContainer}>
        <span className={styles.number}>1</span>
        <p className={styles.task}>Сверстать сайт</p>
      </div>
      <button className={styles.menu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="6" viewBox="0 0 26 6" fill="none">
          <circle cx="3" cy="3" r="3" fill="#C4C4C4"/>
          <circle cx="13" cy="3" r="3" fill="#C4C4C4"/>
          <circle cx="23" cy="3" r="3" fill="#C4C4C4"/>
        </svg>
      </button>
    </li>
  );
}
