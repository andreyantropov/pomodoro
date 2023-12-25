import React from 'react';
import styles from './tasklist.module.css';
import { Task } from './Task';

export function TaskList() {
  return (
      <ul className={styles.list}>
        <Task />
        <Task />
      </ul>
  );
}
