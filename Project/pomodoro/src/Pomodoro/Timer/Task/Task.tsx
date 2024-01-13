import React from 'react';
import styles from './task.module.css';
import { useCurrentTask } from '../../../hooks/useCurrentTask';

export function Task() {
  const [currentTask] = useCurrentTask();
  
  return (
    <div className={styles.taskContainer}>
        <span className={styles.number}>Задача - </span>
        <span className={styles.task}>{currentTask ? currentTask.text : 'Задача отсутствует'}</span>
      </div>
  );
}
