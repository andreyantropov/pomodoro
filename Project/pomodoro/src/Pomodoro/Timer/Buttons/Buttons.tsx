import React from 'react';
import styles from './buttons.module.css';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../../../store/store';
import { Button } from '../../../Button';
import { useCurrentTask } from '../../../hooks/useCurrentTask';
import { useCurrentStat } from '../../../hooks/useCurrentStat';
import { TimerStatus } from '../../../enums/TimerStatus';

export function Buttons() {
  const { dispatch, timer, settings } = useStoreon<State, Events>('timer', 'settings');
  const [ currentTask ] = useCurrentTask();
  const [ currentStat ] = useCurrentStat();

  function handleStartClick() {
    dispatch('timer/update', {...timer, status: TimerStatus.InProgress, time: settings.workTime});
  }

  function handlePauseClick() {
    if (timer.status === TimerStatus.InProgress) {
      dispatch('timer/update', {...timer, status: TimerStatus.InProgressPaused});
    } else if (timer.status === TimerStatus.Break) {
      dispatch('timer/update', {...timer, status: TimerStatus.BreakPaused});
    }

    if (currentStat) {
      dispatch('statistics/stats/update', {...currentStat, pauses: ++currentStat.pauses});
    }
  }

  function handleContinueClick() {
    if (timer.status === TimerStatus.InProgressPaused) {
      dispatch('timer/update', {...timer, status: TimerStatus.InProgress});
    } else if (timer.status === TimerStatus.BreakPaused) {
      dispatch('timer/update', {...timer, status: TimerStatus.Break});
    }
  }

  function handleStopClick() {
    dispatch('timer/update', {...timer, status: TimerStatus.Stop, time: settings.workTime});
  }

  function handleSkipClick() {
    dispatch('timer/update', {...timer, status: TimerStatus.Stop, time: settings.workTime, tomatoes: ++timer.tomatoes});

    if (currentTask) {
      dispatch('tasks/update', {...currentTask, currentTomato: ++currentTask.currentTomato});
    }
  }

  function handleDoneClick() {
    if (timer.tomatoes % 4) {
      dispatch('timer/update', {...timer, status: TimerStatus.Break, time: settings.shortBreak});
    } else {
      dispatch('timer/update', {...timer, status: TimerStatus.Break, time: settings.longBreak});
    }

    if (currentStat) {
      dispatch('statistics/stats/update', {...currentStat, tomatoes: ++currentStat.tomatoes});
    }
  }

  return (
    <div className={styles.buttonsComponent}>
      {timer.status === TimerStatus.Stop && (
        <>
          <Button className={styles.btn} text='Старт' style='primary' OnClick={handleStartClick} />
          <Button className={styles.btn} text='Стоп' style='secondary' OnClick={handlePauseClick} disabled={true} />
        </>
      )}
      {timer.status === TimerStatus.InProgress && (
        <>
          <Button className={styles.btn} text='Пауза' style='primary' OnClick={handlePauseClick} />
          <Button className={styles.btn} text='Стоп' style='secondary' OnClick={handleStopClick} />
        </>
      )}
      {timer.status === TimerStatus.InProgressPaused && (
        <>
          <Button className={styles.btn} text='Продолжить' style='primary' OnClick={handleContinueClick} />
          <Button className={styles.btn} text='Сделано' style='secondary' OnClick={handleDoneClick} />
        </>
      )}
      {timer.status === TimerStatus.Break && (
        <>
          <Button className={styles.btn} text='Пауза' style='primary' OnClick={handlePauseClick} />
          <Button className={styles.btn} text='Пропустить' style='secondary' OnClick={handleSkipClick} />
        </>
      )}
      {timer.status === TimerStatus.BreakPaused && (
        <>
          <Button className={styles.btn} text='Продолжить' style='primary' OnClick={handleContinueClick} />
          <Button className={styles.btn} text='Пропустить' style='secondary' OnClick={handleSkipClick} />
        </>
      )}
    </div>
  );
}
