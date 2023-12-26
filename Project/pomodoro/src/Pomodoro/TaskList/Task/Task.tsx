import React from 'react';
import styles from './task.module.css';
import { Menu } from './Menu';

interface TaskProps {
  id: string;
  text: string;
}

export function Task({ id, text }: TaskProps) {
  return (
    <li className={styles.taskComponent}>
      <div className={styles.taskContainer}>
        <span className={styles.number}>1</span>
        <span className={styles.task}>{text}</span>
      </div>
      <Menu id={id} text={text} />
    </li>
  );
}
