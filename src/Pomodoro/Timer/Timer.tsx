import React from 'react';
import styles from './timer.module.css';
import { Title } from './Title';
import { Clock } from './Clock';
import { Buttons } from './Buttons/Buttons';
import { Task } from './Task';

export function Timer() {
  return (
    <div className={styles.timerComponent}>
      <Title />
      <Clock />
      <Task />
      <Buttons />
    </div>
  );
}
