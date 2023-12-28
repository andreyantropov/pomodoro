import React from 'react';
import styles from './taskitem.module.css';
import { Menu } from './Menu';
import { TaskEditFormContainer } from './TaskEditFormContainer';
import { Task } from '../../../interfaces/task';

interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
  return (
    <li className={styles.taskComponent}>
      <div className={styles.taskContainer}>
        <span className={styles.number}>{task.tomatoes}</span>
        <TaskEditFormContainer task={task} />
      </div>
      <Menu task={task} />
    </li>
  );
}
