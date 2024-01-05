import React, { useEffect, useState } from 'react';
import styles from './clock.module.css';
import { Timer } from '../../../interfaces/timer';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../../../store/store';
import { PlusBtn } from './PlusBtn';
import classNames from 'classnames';

interface ClockProps {
  timer: Timer;
  additionalTime?: number;
}

export function Clock({ timer, additionalTime = 60_000 }: ClockProps) {
  const { dispatch } = useStoreon<State, Events>();
  const [minutes, setMinutes] = useState('25');
  const [seconds, setSeconds] = useState('00');

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timer.isRunning) {
      interval = setInterval(() => {
        dispatch('timer/time/set', timer.time - 1000);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  useEffect(() => {
    const min = Math.floor(timer.time / 60_000);
    setMinutes( min.toString().padStart(2, '0') );
    const sec = ((timer.time % 60_000) / 1000);
    setSeconds( sec.toString().padStart(2, '0') );
  }, [timer.time]);

  const clockClasses = classNames(
    styles.clock,
    { [styles.inProgress]: timer.status === 'in progress' && timer.isRunning },
    { [styles.break]: timer.status === 'break' && timer.isRunning },
  );

  return (
    <div className={styles.clockComponent}>
      <span className={clockClasses}>{minutes}:{seconds}</span>
      <PlusBtn timer={timer} additionalTime={additionalTime} />
    </div>
  );
}
