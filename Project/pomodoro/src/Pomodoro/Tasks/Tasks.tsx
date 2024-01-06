import React, { useEffect, useState } from 'react';
import styles from './tasks.module.css';
import { TaskFormContainer } from './TaskFormContainer';
import { TaskList } from './TaskList';
import { Total } from './Total';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../../store/store';

export function Tasks() {
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
      dispatch('stats/update', {...stat, plannedTomatoes: plannedTomatoes});
    }
  }, [tasks]);
  
  return (
    <>
      <TaskFormContainer />
      <TaskList tasks={tasks} />
      <Total tasks={tasks} />
    </>
  );
}
