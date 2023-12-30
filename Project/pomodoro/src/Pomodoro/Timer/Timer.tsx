import React, { useState, useEffect } from 'react';
import styles from './timer.module.css';
import { Title } from './Title';
import { Events, State } from '../../store/store';
import { useStoreon } from 'storeon/react';
import { Clock } from './Clock';
import { Buttons } from './Buttons';

export function Timer() {
  const { tasks, timer } = useStoreon<State, Events>('tasks', 'timer');
  const [ currentTask, setCurrentTask ] = useState(tasks[0]);

  useEffect(() => {
    setCurrentTask(tasks[0]);
  }, [tasks]);

  return (
    <div className={styles.timerComponent}>
      <Title currentTask={currentTask} timer={timer} />
      <Clock timer={timer} />

      <div className={styles.taskContainer}>
        <span className={styles.number}>Задача 1 - </span>
        <span className={styles.task}>{currentTask ? currentTask.text : 'Задача отсутствует'}</span>
      </div>

      <Buttons timer={timer} currentTask={currentTask} />
    </div>
  );
}
