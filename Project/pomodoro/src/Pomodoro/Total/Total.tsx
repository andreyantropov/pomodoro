import React, { useEffect, useState } from 'react';
import styles from './total.module.css';
import { Task } from '../../interfaces/task';

interface TaskListProps {
  tasks: Task[];
}

export function Total({ tasks }: TaskListProps) {
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    let tomatoes = 0;
    for (const task of tasks) {
      const unfinishedTomatoes = task.tomatoes - Math.min(task.tomatoes, task.currentTomato - 1);
      tomatoes += unfinishedTomatoes;
    }
    setTotalTime(tomatoes * 25);
  }, [tasks]);
  
  return (
    <span className={styles.totalTime}>{totalTime} мин</span>
  );
}