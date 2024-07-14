import React, { useEffect } from 'react';
import styles from './tasklist.module.css';
import { TaskItem } from './Task/TaskItem';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../../../store/store';
import { useCurrentStat } from '../../../hooks/useCurrentStat';
import { Reorder } from 'framer-motion';

export function TaskList() {
  const { dispatch, tasks } = useStoreon<State, Events>('tasks');
  const [currentStat] = useCurrentStat();

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
    <Reorder.Group className={styles.list} axis="y" values={tasks} onReorder={(tasks) => dispatch('tasks/reorder', tasks)}>
      { tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
          />
        ))
      }
    </Reorder.Group>
  );
}
