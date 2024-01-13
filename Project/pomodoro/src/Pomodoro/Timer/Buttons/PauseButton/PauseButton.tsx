import React from 'react';
import styles from './pausebutton.module.css';
import { useStoreon } from 'storeon/react';
import { Button } from '../../../../Button';
import { TimerStatus } from '../../../../enums/TimerStatus';
import { useCurrentStat } from '../../../../hooks/useCurrentStat';
import { State, Events } from '../../../../store/store';

export function PauseButton() {
  const { dispatch, timer } = useStoreon<State, Events>('timer');
  const [currentStat] = useCurrentStat();

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

  return (
    <Button className={styles.btn} text='Пауза' style='primary' OnClick={handlePauseClick} />
  );
}
