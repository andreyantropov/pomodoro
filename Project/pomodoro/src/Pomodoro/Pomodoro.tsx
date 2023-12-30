import React, { useEffect, useState } from 'react';
import styles from './pomodoro.module.css';
import { Timer } from './Timer';
import { Instruction } from './Instruction';
import { TaskList } from './TaskList';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../store/store';
import { TaskFormContainer } from './TaskFormContainer/TaskFormContainer';
import { Total } from './Total';

export function Pomodoro() {
  const { tasks } = useStoreon<State, Events>('tasks');
  
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.tasks}>
            <Instruction />
            <TaskFormContainer />
            <TaskList tasks={tasks} />
            <Total tasks={tasks} />
          </div>
          <Timer currentTask={tasks.length ? tasks[0] : undefined} />
        </div>
      </div>
    </section>
  );
}
