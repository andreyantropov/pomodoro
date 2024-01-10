import React from 'react';
import styles from './buttons.module.css';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../../../store/store';
import { Button } from './Button';
import { useCurrentTask } from '../../../hooks/useCurrentTask';
import { useCurrentStat } from '../../../hooks/useCurrentStat';
import { TimerStatus } from '../../../enums/TimerStatus';

export function Buttons() {
  const { dispatch, timer, settings } = useStoreon<State, Events>('timer', 'settings');
  const [ currentTask ] = useCurrentTask();
  const [ currentStat ] = useCurrentStat();

  const handleStartClick = () => {
    dispatch('timer/status/set', TimerStatus.InProgress);
    dispatch('timer/time/set', settings.tomato);
  }

  const handlePauseClick = () => {
    if (timer.status === TimerStatus.InProgress) {
      dispatch('timer/status/set', TimerStatus.InProgressPaused);
    } else if (timer.status === TimerStatus.Break) {
      dispatch('timer/status/set', TimerStatus.BreakPaused);
    }

    if (currentStat) {
      dispatch('statistics/stats/update', {...currentStat, pauses: ++currentStat.pauses});
    }
  }

  const handleContinueClick = () => {
    if (timer.status === TimerStatus.InProgressPaused) {
      dispatch('timer/status/set', TimerStatus.InProgress);
    } else if (timer.status === TimerStatus.BreakPaused) {
      dispatch('timer/status/set', TimerStatus.Break);
    }
  }

  const handleStopClick = () => {
    dispatch('timer/status/set', TimerStatus.Stop);
    dispatch('timer/time/set', settings.tomato);
  }

  const handleSkipClick = () => {
    dispatch('timer/status/set', TimerStatus.Stop);
    dispatch('timer/time/set', settings.tomato);
    dispatch('timer/tomatoes/set', ++timer.tomatoes);
    if (currentTask) {
      dispatch('tasks/update', {...currentTask, currentTomato: ++currentTask.currentTomato});
    }
  }

  const handleDoneClick = () => {
    dispatch('timer/status/set', TimerStatus.Break);
    if (timer.tomatoes % 4) {
      dispatch('timer/time/set', settings.shortBreak);
    } else {
      dispatch('timer/time/set', settings.longBreak);
    }

    if (currentStat) {
      dispatch('statistics/stats/update', {...currentStat, tomatoes: ++currentStat.tomatoes});
    }
  }

  return (
    <div className={styles.buttonsComponent}>
      {timer.status === TimerStatus.Stop && (
        <>
          <Button text='Старт' style='primary' OnClick={handleStartClick} />
          <Button text='Стоп' style='secondary' OnClick={handlePauseClick} disabled={true} />
        </>
      )}
      {timer.status === TimerStatus.InProgress && (
        <>
          <Button text='Пауза' style='primary' OnClick={handlePauseClick} />
          <Button text='Стоп' style='secondary' OnClick={handleStopClick} />
        </>
      )}
      {timer.status === TimerStatus.InProgressPaused && (
        <>
          <Button text='Продолжить' style='primary' OnClick={handleContinueClick} />
          <Button text='Сделано' style='secondary' OnClick={handleDoneClick} />
        </>
      )}
      {timer.status === TimerStatus.Break && (
        <>
          <Button text='Пауза' style='primary' OnClick={handlePauseClick} />
          <Button text='Пропустить' style='secondary' OnClick={handleSkipClick} />
        </>
      )}
      {timer.status === TimerStatus.BreakPaused && (
        <>
          <Button text='Продолжить' style='primary' OnClick={handleContinueClick} />
          <Button text='Пропустить' style='secondary' OnClick={handleSkipClick} />
        </>
      )}
    </div>
  );
}
