import React, { useEffect, useState } from 'react';
import styles from './clock.module.css';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../../../store/store';
import { PlusBtn } from './PlusBtn';
import classNames from 'classnames';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCurrentStat } from '../../../hooks/useCurrentStat';
import { TimerStatus } from '../../../enums/TimerStatus';
import { MIN, SEC } from '../../../constants/time';

export function Clock() {
  const { dispatch, timer, stats, settings } = useStoreon<State, Events>('timer', 'stats', 'settings');
  const [minutes, setMinutes] = useState((settings.workTime / MIN).toString());
  const [seconds, setSeconds] = useState('00');
  const [currentStat] = useCurrentStat();

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timer.status === TimerStatus.InProgress || timer.status === TimerStatus.Break) {
      interval = setInterval(() => {        
        if (timer.time) {
          dispatch('timer/update', {...timer, time: timer.time - 1000});
          if (currentStat) {
            dispatch('statistics/stats/update', {...currentStat, workedTime: currentStat.workedTime + 1000});
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
      if (timer.status === TimerStatus.InProgress) {
        notification("Вы отлично поработали! Пора отдохнуть!");
      } else if (timer.status === TimerStatus.Break) {
        notification("Пора поработать!");
      }  
    }

    function notification(message: string) {
      new Audio('audio/notification.wav').play();
      toast(message);
    }
  }, [timer]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timer.status === TimerStatus.InProgressPaused || timer.status === TimerStatus.BreakPaused) {
      interval = setInterval(() => {        
        if (timer.time) {
          if (currentStat) {
            dispatch('statistics/stats/update', {...currentStat, pausedTime: currentStat.pausedTime + 1000});
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
    const min = Math.floor(timer.time / MIN);
    setMinutes( min.toString().padStart(2, '0') );
    const sec = ((timer.time % MIN) / SEC);
    setSeconds( sec.toString().padStart(2, '0') );
  }, [timer.time]);

  useEffect(() => {
    if (timer.status === TimerStatus.Stop) {
      setMinutes((settings.workTime / MIN).toString());
    }
  }, [settings]);

  const clockClasses = classNames(
    styles.clock,
    { [styles.inProgress]: timer.status === TimerStatus.InProgress },
    { [styles.break]: timer.status === TimerStatus.Break },
  );

  return (
    <div className={styles.clockComponent}>
      <span className={clockClasses}>{minutes}:{seconds}</span>
      <PlusBtn />
      <ToastContainer
        toastStyle={{ padding: "24px", fontSize: "20px", lineHeight: "18px", color: "var(--white)", backgroundColor: "var(--secondary)" }}
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
