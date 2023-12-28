import React from 'react';
import styles from './title.module.css';

interface TitleProps {
  task: string;
  tomato: number;
}

export function Title({ task, tomato }: TitleProps) {
  return (
    <div className={styles.titleContainer}>
      <h3 className={styles.title}>{task}</h3>
      <span className={styles.tomato}>Помидор {tomato}</span>
    </div>
  );
}
