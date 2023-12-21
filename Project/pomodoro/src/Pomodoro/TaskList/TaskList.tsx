import React from 'react';
import styles from './tasklist.module.css';

export function TaskList() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.currentTask}>Название задачи</span>
      <button className={styles.addBtn}>Добавить</button>
      <ul className={styles.list}></ul>
      <span className={styles.totalTime}></span>
    </div>
  );
}
