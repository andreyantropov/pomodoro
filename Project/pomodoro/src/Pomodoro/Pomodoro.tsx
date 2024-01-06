import React, { useState } from 'react';
import styles from './pomodoro.module.css';
import { Timer } from './Timer';
import { Instruction } from './Instruction';
import { Tasks } from './Tasks';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../store/store';

export function Pomodoro() {
  const { dispatch, stats } = useStoreon<State, Events>('stats');
  const [currentDate, setCurrentDate] = useState(new Date().getDate());

  if (!stats.find(stat => stat.date === currentDate)) {
    dispatch('stats/add', { date: currentDate, tomatoes: 0, plannedTomatoes: 0, pauses: 0, workedTime: 0, pausedTime: 0 });
  }

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
