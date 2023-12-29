import React from 'react';
import styles from './title.module.css';
import { Task } from '../../../interfaces/task';

interface TitleProps {
  currentTask?: Task;
}

export function Title({ currentTask }: TitleProps) {
  return (
    <div className={styles.titleContainer}>
      <h3 className={styles.title}>{currentTask ? currentTask.text : 'Задача отсутствует'}</h3>
      <span className={styles.tomato}>Помидор {currentTask ? currentTask.currentTomato : 0}</span>
    </div>
  );
}
