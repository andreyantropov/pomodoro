import React, { useContext, useEffect, useState } from 'react';
import styles from './clock.module.css';
import { PlusIcon } from '../../../Icon/PlusIcon';
import { Timer } from '../../../interfaces/timer';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../../../store/store';
import { isRunningContext } from '../../../contexts/IsRunning';

interface ClockProps {
  timer: Timer;
}

export function Clock({ timer }: ClockProps) {
  const { dispatch } = useStoreon<State, Events>('timer');
  const { isRunning } = useContext(isRunningContext);
  const [time, setTime] = useState(timer.time);
  const [minutes, setMinutes] = useState('25');
  const [seconds, setSeconds] = useState('00');

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1000);
        dispatch('timer/time/set', time);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  useEffect(() => {
    const min = Math.floor(time / 60_000);
    setMinutes( min.toString().padStart(2, '0') );
    const sec = ((time % 60_000) / 1000);
    setSeconds( sec.toString().padStart(2, '0') );
  }, [time]);

  return (
    <div className={styles.clockComponent}>
      <span className={styles.clock}>{minutes}:{seconds}</span>
      <button>
        <PlusIcon />
      </button>
    </div>
  );
}
