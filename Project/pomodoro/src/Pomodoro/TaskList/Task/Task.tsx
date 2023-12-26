import React from 'react';
import styles from './task.module.css';
import { Menu } from './Menu';

interface TaskProps {
  id: string;
  task: string;
}

export function Task({ id, task }: TaskProps) {
  return (
    <li className={styles.taskComponent}>
      <div className={styles.taskContainer}>
        <span className={styles.number}>1</span>
        <span className={styles.task}>{task}</span>
      </div>
      <Menu id={id} />
    </li>
  );
}
