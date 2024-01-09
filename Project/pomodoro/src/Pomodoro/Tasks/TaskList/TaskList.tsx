import React, { useEffect, useState } from 'react';
import styles from './tasklist.module.css';
import { TaskItem } from './Task/TaskItem';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../../../store/store';

export function TaskList() {
  const { dispatch, tasks, stats } = useStoreon<State, Events>('tasks', 'stats');
  const [currentDate, setCurrentDate] = useState(new Date().getDate());
  const [stat, setStat] = useState(stats.find(stat => stat.date === currentDate));

  useEffect(() => {
    setStat(stats.find(stat => stat.date === currentDate));
  }, [stats]);

  useEffect(() => {
    let plannedTomatoes = 0;
    for (const task of tasks) {
      plannedTomatoes += task.tomatoes;
    }
    if (stat) {
      dispatch('statistics/stats/update', {...stat, plannedTomatoes: plannedTomatoes});
    }
  }, [tasks]);

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
