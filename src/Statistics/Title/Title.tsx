import React from 'react';
import styles from './title.module.css';
import { Interval } from './Interval/Interval';

export function Title() {
  return (
    <div className={styles.titleComponent}>
      <h2 className={styles.title}>Ваша статистика</h2>
      <Interval />
    </div>
  );
}
