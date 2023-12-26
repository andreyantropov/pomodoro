import React from 'react';
import styles from './pomodoro.module.css';
import { Timer } from './Timer';
import { Instruction } from './Instruction';
import { TaskList } from './TaskList';
import { TaskFormContainer } from './TaskFormContainer';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../store/store';

export function Pomodoro() {
  const { dispatch, tasks } = useStoreon<State, Events>('tasks');
  
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.tasks}>
            <Instruction />
            <TaskFormContainer />
            <TaskList />
            <span className={styles.totalTime}>{ tasks.length * 25 } мин</span>
          </div>
          <Timer />
        </div>
      </div>
    </section>
  );
}
