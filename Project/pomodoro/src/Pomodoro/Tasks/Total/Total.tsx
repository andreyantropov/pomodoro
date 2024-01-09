import React, { useEffect, useState } from 'react';
import styles from './total.module.css';
import { Task } from '../../../interfaces/task';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../../../store/store';

interface TaskListProps {
  tasks: Task[];
}

export function Total({ tasks }: TaskListProps) {
  const { dispatch, settings } = useStoreon<State, Events>('settings');
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    let tomatoes = 0;
    for (const task of tasks) {
      tomatoes += task.tomatoes;
    }
    setTotalTime(tomatoes * settings.tomato / 60_000);
  }, [tasks]);
  
  return (
    <span className={styles.totalTime}>{totalTime} мин</span>
  );
}
