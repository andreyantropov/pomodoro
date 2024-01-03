import React from 'react';
import styles from './time.module.css';

export function Time() {
  return (
    <div className={styles.timeComponent}>
      <h4 className={styles.title}>Суббота</h4>
      <span className={styles.time}>Нет данных</span>
    </div>
  );
}
