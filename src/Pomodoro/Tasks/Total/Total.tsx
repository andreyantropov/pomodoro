import React, { useEffect, useState } from 'react';
import styles from './total.module.css';
import { Task } from '../../../interfaces/task';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../../../store/store';
import { MIN } from '../../../constants/time';

export function Total() {
  const { tasks, settings } = useStoreon<State, Events>('tasks', 'settings');
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    let tomatoes = 0;
    for (const task of tasks) {
      tomatoes += task.tomatoes;
    }
    setTotalTime(tomatoes * settings.workTime / MIN);
  }, [tasks]);
  
  return (
    <span className={styles.totalTime}>{totalTime} мин</span>
  );
}
