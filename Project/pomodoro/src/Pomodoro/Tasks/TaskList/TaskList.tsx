import React, { useEffect, useState } from 'react';
import styles from './tasklist.module.css';
import { TaskItem } from './Task/TaskItem';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../../../store/store';
import { useCurrentStat } from '../../../hooks/useCurrentStat';

export function TaskList() {
  const { dispatch, tasks, stats } = useStoreon<State, Events>('tasks', 'stats');
  const [ currentStat ] = useCurrentStat();

  useEffect(() => {
    let plannedTomatoes = 0;
    for (const task of tasks) {
      plannedTomatoes += task.tomatoes;
    }
    if (currentStat) {
      dispatch('statistics/stats/update', {...currentStat, plannedTomatoes: plannedTomatoes});
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
