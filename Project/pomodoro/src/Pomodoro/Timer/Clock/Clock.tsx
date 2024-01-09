import React, { useEffect, useState } from 'react';
import styles from './clock.module.css';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../../../store/store';
import { PlusBtn } from './PlusBtn';
import classNames from 'classnames';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCurrentDate } from '../../../hooks/useCurrentDate';

export function Clock() {
  const { dispatch, timer, stats, settings } = useStoreon<State, Events>('stats', 'settings');
  const [minutes, setMinutes] = useState((settings.tomato / 60_000).toString());
  const [seconds, setSeconds] = useState('00');
  const [currentDate] = useCurrentDate();
  const [stat, setStat] = useState(stats.find(stat => stat.date === currentDate));

  useEffect(() => {
    setStat(stats.find(stat => stat.date === currentDate));
  }, [stats]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timer.isRunning) {
      interval = setInterval(() => {        
        if (timer.time) {
          dispatch('timer/time/set', timer.time - 1000);
          if (stat) {
            dispatch('statistics/stats/update', {...stat, workedTime: stat.workedTime + 1000});
          }
        } else {
          clearInterval(interval);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  useEffect(() => {
    if (timer.time === 0) {
      if (timer.status === 'in progress') {
        notification("Вы отлично поработали! Пора отдохнуть!");
      } else if (timer.status === 'break') {
        notification("Пора поработать!");
      }  
    }
  }, [timer]);

  function notification(message: string) {
    new Audio('audio/notification.wav').play();
    toast(message);
  }

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!timer.isRunning && timer.status !== 'stop') {
      interval = setInterval(() => {        
        if (timer.time) {
          if (stat) {
            dispatch('statistics/stats/update', {...stat, pausedTime: stat.pausedTime + 1000});
          }
        } else {
          clearInterval(interval);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer, stats]);

  useEffect(() => {
    const min = Math.floor(timer.time / 60_000);
    setMinutes( min.toString().padStart(2, '0') );
    const sec = ((timer.time % 60_000) / 1000);
    setSeconds( sec.toString().padStart(2, '0') );
  }, [timer.time]);

  useEffect(() => {
    if (timer.status === 'stop') {
      setMinutes((settings.tomato / 60_000).toString());
    }
  }, [settings]);

  const clockClasses = classNames(
    styles.clock,
    { [styles.inProgress]: timer.status === 'in progress' && timer.isRunning },
    { [styles.break]: timer.status === 'break' && timer.isRunning },
  );

  return (
    <div className={styles.clockComponent}>
      <span className={clockClasses}>{minutes}:{seconds}</span>
      <PlusBtn timer={timer} additionalTime={settings.additionalTime} />
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
