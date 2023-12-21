import React from 'react';
import styles from './tasklist.module.css';
import { Task } from './Task';

export function TaskList() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.currentTask}>Название задачи</span>
      <button className={styles.addBtn}>Добавить</button>
      <ul className={styles.list}>
        <Task />
        <Task />
      </ul>
      <span className={styles.totalTime}>50 мин</span>
    </div>
  );
}
