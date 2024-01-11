import React from 'react';
import styles from './taskitem.module.css';
import { Menu } from './Menu';
import { TaskEditFormContainer } from './TaskEditFormContainer';
import { Task } from '../../../../interfaces/task';
import { Reorder } from 'framer-motion';

interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
  const fade = {
    initial: {
      opacity: 0,
      x: 20,
      transition: { duration: 0.5 },
    },
    adding: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
    removing: {
      opacity: 0,
      x: 20,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Reorder.Item className={styles.taskComponent} key={task.id} value={task} animate={task.isRemoving ? 'removing' : 'adding'} initial="initial" exit="initial" variants={fade}>
      <div className={styles.taskContainer}>
        <span className={styles.number}>{task.tomatoes}</span>
        <TaskEditFormContainer task={task} />
      </div>
      <Menu task={task} />
    </Reorder.Item>
  );
}
