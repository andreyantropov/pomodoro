import React, { useEffect, useState } from 'react';
import styles from './clock.module.css';
import { Timer } from '../../../interfaces/timer';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../../../store/store';
import { PlusBtn } from './PlusBtn';
import classNames from 'classnames';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        if (timer.time ) {
          dispatch('timer/time/set', timer.time - 1000);
        } else {
          clearInterval(interval);

          if (timer.status === 'in progress') {
            notification("Вы отлично поработали! Пора отдохнуть!");
          } else if (timer.status === 'break') {
            notification("Пора поработать!");
          }  
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  function notification(message: string) {
    new Audio('audio/notification.wav').play();
    toast(message);
  }

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
      <ToastContainer
        toastStyle={{ padding: "24px", fontSize: "20px", lineHeight: "18px", color: "#fff", backgroundColor: "#a8b64f" }}
        position="top-right"
        autoClose={5000}
        draggable={false}
        theme="colored"
        hideProgressBar
        closeOnClick
      />
    </div>
  );
}
