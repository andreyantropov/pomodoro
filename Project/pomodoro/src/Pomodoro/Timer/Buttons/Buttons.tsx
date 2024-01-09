import React, { useEffect, useState } from 'react';
import styles from './buttons.module.css';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../../../store/store';
import { Button } from './Button';
import { useCurrentDate } from '../../../hooks/useCurrentDate';
import { useCurrentTask } from '../../../hooks/useCurrentTask';
import { useCurrentStat } from '../../../hooks/useCurrentStat';

export function Buttons() {
  const { dispatch, timer, stats, settings } = useStoreon<State, Events>('timer', 'stats', 'settings');
  const [ currentTask ] = useCurrentTask();
  const [ currentStat ] = useCurrentStat();

  const handleStartClick = () => {
    dispatch('timer/status/set', 'in progress');
    dispatch('timer/time/set', settings.tomato);
    dispatch('timer/isrunning/set', true);
  }

  const handlePauseClick = () => {
    dispatch('timer/isrunning/set', false);

    if (currentStat) {
      dispatch('statistics/stats/update', {...currentStat, pauses: ++currentStat.pauses});
    }
  }

  const handleContinueClick = () => {
    dispatch('timer/isrunning/set', true);
  }

  const handleStopClick = () => {
    dispatch('timer/status/set', 'stop');
    dispatch('timer/time/set', settings.tomato);
    dispatch('timer/isrunning/set', false);
  }

  const handleSkipClick = () => {
    dispatch('timer/status/set', 'stop');
    dispatch('timer/time/set', settings.tomato);
    dispatch('timer/tomatoes/set', ++timer.tomatoes);
    dispatch('timer/isrunning/set', false);
    if (currentTask) {
      dispatch('tasks/update', {...currentTask, currentTomato: ++currentTask.currentTomato});
    }
  }

  const handleDoneClick = () => {
    dispatch('timer/status/set', 'break');
    if (timer.tomatoes % 4) {
      dispatch('timer/time/set', settings.shortBreak);
    } else {
      dispatch('timer/time/set', settings.longBreak);
    }
    dispatch('timer/isrunning/set', true);

    if (currentStat) {
      dispatch('statistics/stats/update', {...currentStat, tomatoes: ++currentStat.tomatoes});
    }
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
