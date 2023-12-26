import React from 'react';
import styles from './timer.module.css';

export function Timer() {
  return (
    <div className={styles.timerComponent}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>Сверстать сайт</h3>
        <span className={styles.tomato}>Помидор 1</span>
      </div>

      <span className={styles.timer}>25:00</span>

      <div className={styles.taskContainer}>
        <span className={styles.number}>Задача 1 - </span>
        <span className={styles.task}>Сверстать сайт</span>
      </div>

      <div className={styles.btnContainer}>
        <button className={styles.startBtn}>Старт</button>
        <button className={styles.stopBtn} disabled>Стоп</button>
      </div>
    </div>
  );
}
