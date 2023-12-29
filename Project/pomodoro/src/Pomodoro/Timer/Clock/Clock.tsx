import React, { useEffect, useState } from 'react';
import styles from './clock.module.css';
import { PlusIcon } from '../../../Icon/PlusIcon';
import { Timer } from '../../../interfaces/timer';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../../../store/store';

interface ClockProps {
  timer: Timer;
}

export function Clock({ timer }: ClockProps) {
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

  return (
    <div className={styles.clockComponent}>
      <span className={styles.clock}>{minutes}:{seconds}</span>
      <button>
        <PlusIcon />
      </button>
    </div>
  );
}
