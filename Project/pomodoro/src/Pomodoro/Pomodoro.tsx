import React from 'react';
import styles from './pomodoro.module.css';
import { Timer } from './Timer';
import { Instruction } from './Instruction';
import { TaskList } from './TaskList';
import { TaskFormContainer } from './TaskFormContainer';

export function Pomodoro() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.tasks}>
            <Instruction />
            <TaskFormContainer />
            <TaskList />
            <span className={styles.totalTime}>50 мин</span>
          </div>
          <Timer />
        </div>
      </div>
    </section>
  );
}
