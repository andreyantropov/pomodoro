import React from 'react';
import styles from './pomodoro.module.css';
import { Timer } from './Timer';
import { Instruction } from './Instruction';
import { TaskList } from './TaskList';

export function Pomodoro() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.tasks}>
            <Instruction />
            <TaskList />
          </div>
          <Timer />
        </div>
      </div>
    </section>
  );
}
