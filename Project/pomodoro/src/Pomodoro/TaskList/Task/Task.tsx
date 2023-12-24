import React from 'react';
import styles from './task.module.css';
import { Menu } from './Menu';

export function Task() {
  return (
    <li className={styles.taskComponent}>
      <div className={styles.taskContainer}>
        <span className={styles.number}>1</span>
        <p className={styles.task}>Сверстать сайт</p>
      </div>
      <Menu />
    </li>
  );
}
