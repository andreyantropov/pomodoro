import React from 'react';
import styles from './task.module.css';
import { Menu } from './Menu';
import { TaskEditFormContainer } from './TaskEditFormContainer';

interface TaskProps {
  id: number;
  text: string;
  isEdit: boolean;
  tomatoes: number;
}

export function Task({ id, text, isEdit, tomatoes }: TaskProps) {
  return (
    <li className={styles.taskComponent}>
      <div className={styles.taskContainer}>
        <span className={styles.number}>{tomatoes}</span>
        <TaskEditFormContainer id={id} text={text} isEdit={isEdit} tomatoes={tomatoes} />
      </div>
      <Menu id={id} text={text} isEdit={isEdit} tomatoes={tomatoes} />
    </li>
  );
}
