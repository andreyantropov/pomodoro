import React from 'react';
import styles from './task.module.css';
import { Menu } from './Menu';
import { TaskEditFormContainer } from './TaskEditFormContainer';

interface TaskProps {
  id: string;
  text: string;
  isEdit: boolean;
}

export function Task({ id, text, isEdit }: TaskProps) {
  return (
    <li className={styles.taskComponent}>
      <div className={styles.taskContainer}>
        <span className={styles.number}>1</span>
        <TaskEditFormContainer id={id} text={text} isEdit={isEdit} />
      </div>
      <Menu id={id} text={text} isEdit={isEdit} />
    </li>
  );
}
