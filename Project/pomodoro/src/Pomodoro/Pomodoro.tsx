import React, { useEffect, useState } from 'react';
import styles from './pomodoro.module.css';
import { Timer } from './Timer';
import { Instruction } from './Instruction';
import { TaskList } from './TaskList';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../store/store';
import { TaskFormContainer } from './TaskFormContainer/TaskFormContainer';

export function Pomodoro() {
  const { tasks } = useStoreon<State, Events>('tasks');
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    let tomatoes = 0;
    for (const task of tasks) {
      tomatoes += task.tomatoes;
    }
    setTotalTime(tomatoes * 25);
  }, [tasks]);
  
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.tasks}>
            <Instruction />
            <TaskFormContainer />
            <TaskList />
            <span className={styles.totalTime}>{totalTime} мин</span>
          </div>
          <Timer />
        </div>
      </div>
    </section>
  );
}
