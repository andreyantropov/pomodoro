import React from 'react';
import styles from './skipbutton.module.css';
import { useStoreon } from 'storeon/react';
import { Button } from '../../../../Button';
import { TimerStatus } from '../../../../enums/TimerStatus';
import { useCurrentTask } from '../../../../hooks/useCurrentTask';
import { State, Events } from '../../../../store/store';

export function SkipButton() {
  const { dispatch, timer, settings } = useStoreon<State, Events>('timer', 'settings');
  const [ currentTask ] = useCurrentTask();

  function handleSkipClick() {
    dispatch('timer/update', {...timer, status: TimerStatus.Stop, time: settings.workTime, tomatoes: ++timer.tomatoes});

    if (currentTask) {
      dispatch('tasks/update', {...currentTask, currentTomato: ++currentTask.currentTomato});
    }
  }

  return (
    <Button className={styles.btn} text='Пропустить' style='secondary' OnClick={handleSkipClick} />
  );
}
