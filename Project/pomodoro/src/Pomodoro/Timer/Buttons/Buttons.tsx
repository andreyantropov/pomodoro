import React from 'react';
import styles from './buttons.module.css';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../../../store/store';
import { Timer } from '../../../interfaces/timer';
import { Task } from '../../../interfaces/task';

interface ButtonsProps {
  timer: Timer;
  currentTask?: Task;
}

export function Buttons({ timer, currentTask }: ButtonsProps) {
  const { dispatch } = useStoreon<State, Events>();

  const handleStartClick = () => {
    dispatch('timer/status/set', 'in progress');
    dispatch('timer/time/set', 1_500_000);
    dispatch('timer/isrunning/set', true);
  }

  const handlePauseClick = () => {
    dispatch('timer/isrunning/set', false);
  }

  const handleContinueClick = () => {
    dispatch('timer/isrunning/set', true);
  }

  const handleStopClick = () => {
    dispatch('timer/status/set', 'stop');
    dispatch('timer/time/set', 1_500_000);
    dispatch('timer/isrunning/set', false);
  }

  const handleSkipClick = () => {
    dispatch('timer/status/set', 'stop');
    dispatch('timer/time/set', 1_500_000);
    dispatch('timer/tomatoes/set', ++timer.tomatoes);
    dispatch('timer/isrunning/set', false);
    if (currentTask) {
      dispatch('tasks/update', {...currentTask, currentTomato: ++currentTask.currentTomato});
    }
  }

  const handleDoneClick = () => {
    dispatch('timer/status/set', 'break');
    if (timer.tomatoes % 4) {
      dispatch('timer/time/set', 300_000);
    } else {
      dispatch('timer/time/set', 1_200_000);
    }
    dispatch('timer/isrunning/set', true);
  }

  return (
    <div className={styles.buttonsComponent}>
      {timer.status === 'stop' && (
        <>
          <button className={styles.startBtn} onClick={handleStartClick}>Старт</button>
          <button className={styles.stopBtn} onClick={handlePauseClick} disabled>Стоп</button>
        </>
      )}
      {timer.status === 'in progress' && timer.isRunning && (
        <>
          <button className={styles.startBtn} onClick={handlePauseClick}>Пауза</button>
          <button className={styles.stopBtn} onClick={handleStopClick}>Стоп</button>
        </>
      )}
      {timer.status === 'in progress' && !timer.isRunning && (
        <>
          <button className={styles.startBtn} onClick={handleContinueClick}>Продолжить</button>
          <button className={styles.stopBtn} onClick={handleDoneClick}>Сделано</button>
        </>
      )}
      {timer.status === 'break' && timer.isRunning && (
        <>
          <button className={styles.startBtn} onClick={handlePauseClick}>Пауза</button>
          <button className={styles.stopBtn} onClick={handleSkipClick}>Пропустить</button>
        </>
      )}
      {timer.status === 'break' && !timer.isRunning && (
        <>
          <button className={styles.startBtn} onClick={handleContinueClick}>Продолжить</button>
          <button className={styles.stopBtn} onClick={handleSkipClick}>Пропустить</button>
        </>
      )}
    </div>
  );
}
