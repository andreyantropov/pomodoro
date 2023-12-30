import React from 'react';
import styles from './tasklist.module.css';
import { TaskItem } from './Task/TaskItem';
import { Task } from '../../../interfaces/task';

interface TaskListProps {
  tasks: Task[];
}

export function TaskList({ tasks }: TaskListProps) {
  return (
      <ul className={styles.list}>
        { tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
            />
          ))
        }
      </ul>
  );
}
