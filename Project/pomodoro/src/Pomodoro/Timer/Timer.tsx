import React, { useEffect, useState } from 'react';
import styles from './timer.module.css';
import { PlusIcon } from '../../Icon/PlusIcon';
import { Title } from './Title';
import { Events, State } from '../../store/store';
import { useStoreon } from 'storeon/react';

interface TimerProps {
  currentTask?: Task;
}

interface Task {
  id: number;
  text: string;
  isEdit: boolean;
  tomatoes: number;
  currentTomato: number;
}

export function Timer({ currentTask }: TimerProps) {
  const { dispatch, timer } = useStoreon<State, Events>('timer');
  const [time, setTime] = useState(timer.time);
  const [minutes, setMinutes] = useState('25');
  const [seconds, setSeconds] = useState('00');
  const [isRunning, setIsRunning] = useState(false);

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

  const handleStartClick = () => {
    setIsRunning(true);
  }

  const handleStopClick = () => {
    setIsRunning(false);
  }

  return (
    <div className={styles.timerComponent}>
      <Title task={currentTask ? currentTask.text : 'Задача отсутствует'} tomato={currentTask ? currentTask.currentTomato : 0} />

      <div className={styles.timerContainer}>
        <span className={styles.timer}>{minutes}:{seconds}</span>
        <button>
          <PlusIcon />
        </button>
      </div>

      <div className={styles.taskContainer}>
        <span className={styles.number}>Задача 1 - </span>
        <span className={styles.task}>Сверстать сайт</span>
      </div>

      <div className={styles.btnContainer}>
        <button className={styles.startBtn} onClick={handleStartClick}>Старт</button>
        <button className={styles.stopBtn} onClick={handleStopClick} disabled={!currentTask}>Стоп</button>
      </div>
    </div>
  );
}
