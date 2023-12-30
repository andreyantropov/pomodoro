import React from 'react';
import styles from './buttons.module.css';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../../../store/store';
import { Timer } from '../../../interfaces/timer';
import { Task } from '../../../interfaces/task';
import { Button } from './Button';

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
          <Button text='Старт' style='primary' OnClick={handleStartClick} />
          <Button text='Стоп' style='secondary' OnClick={handlePauseClick} disabled={true} />
        </>
      )}
      {timer.status === 'in progress' && timer.isRunning && (
        <>
          <Button text='Пауза' style='primary' OnClick={handlePauseClick} />
          <Button text='Стоп' style='secondary' OnClick={handleStopClick} />
        </>
      )}
      {timer.status === 'in progress' && !timer.isRunning && (
        <>
          <Button text='Продолжить' style='primary' OnClick={handleContinueClick} />
          <Button text='Сделано' style='secondary' OnClick={handleDoneClick} />
        </>
      )}
      {timer.status === 'break' && timer.isRunning && (
        <>
          <Button text='Пауза' style='primary' OnClick={handlePauseClick} />
          <Button text='Пропустить' style='secondary' OnClick={handleSkipClick} />
        </>
      )}
      {timer.status === 'break' && !timer.isRunning && (
        <>
          <Button text='Продолжить' style='primary' OnClick={handleContinueClick} />
          <Button text='Пропустить' style='secondary' OnClick={handleSkipClick} />
        </>
      )}
    </div>
  );
}
