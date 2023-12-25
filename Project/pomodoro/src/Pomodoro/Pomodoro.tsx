import React from 'react';
import styles from './pomodoro.module.css';
import { Timer } from './Timer';
import { Instruction } from './Instruction';
import { TaskList } from './TaskList';
import { TaskForm } from './TaskForm';

export function Pomodoro() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.tasks}>
            <Instruction />
            <TaskForm />
            <TaskList />
            <span className={styles.totalTime}>50 мин</span>
          </div>
          <Timer />
        </div>
      </div>
    </section>
  );
}
