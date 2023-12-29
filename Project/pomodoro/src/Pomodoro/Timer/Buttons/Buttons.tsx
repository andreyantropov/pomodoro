import React from 'react';
import styles from './buttons.module.css';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../../../store/store';
import { Timer } from '../../../interfaces/timer';

interface ButtonsProps {
  timer: Timer;
}

export function Buttons({ timer }: ButtonsProps) {
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
      <button className={styles.startBtn} onClick={handleContinueClick}>Старт</button>
      <button className={styles.stopBtn} onClick={handlePauseClick} disabled={timer.status === 'stop'}>Стоп</button>
    </div>
  );
}
