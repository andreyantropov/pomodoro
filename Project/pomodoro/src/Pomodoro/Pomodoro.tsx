import React from 'react';
import styles from './pomodoro.module.css';
import { Timer } from './Timer';
import { Instruction } from './Instruction';
import { Tasks } from './Tasks';

export function Pomodoro() {  
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.tasks}>
            <Instruction />
            <Tasks />
          </div>
          <Timer />
        </div>
      </div>
    </section>
  );
}
