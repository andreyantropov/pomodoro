import React from 'react';
import styles from './continuebutton.module.css';
import { useStoreon } from 'storeon/react';
import { TimerStatus } from '../../../../enums/TimerStatus';
import { State, Events } from '../../../../store/store';
import { Button } from '../../../../Button';

export function ContinueButton() {
  const { dispatch, timer } = useStoreon<State, Events>('timer');
  
  function handleContinueClick() {
    if (timer.status === TimerStatus.InProgressPaused) {
      dispatch('timer/update', {...timer, status: TimerStatus.InProgress});
    } else if (timer.status === TimerStatus.BreakPaused) {
      dispatch('timer/update', {...timer, status: TimerStatus.Break});
    }
  }

  return (
    <Button className={styles.btn} text='Продолжить' style='primary' OnClick={handleContinueClick} />
  );
}
