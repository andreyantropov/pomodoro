import React from 'react';
import styles from './timer.module.css';
import { Title } from './Title';
import { Events, State } from '../../store/store';
import { useStoreon } from 'storeon/react';
import { Clock } from './Clock';
import { Buttons } from './Buttons/Buttons';
import { useCurrentTask } from '../../hooks/useCurrentTask';

export function Timer() {
  const { timer, settings } = useStoreon<State, Events>('timer', 'settings');
  const [ currentTask ] = useCurrentTask();

  return (
    <div className={styles.timerComponent}>
      <Title />
      <Clock />

      <div className={styles.taskContainer}>
        <span className={styles.number}>Задача 1 - </span>
        <span className={styles.task}>{currentTask ? currentTask.text : 'Задача отсутствует'}</span>
      </div>

      <Buttons />
    </div>
  );
}
