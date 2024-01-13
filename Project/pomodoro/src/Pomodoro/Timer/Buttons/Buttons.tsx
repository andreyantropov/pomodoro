import React from 'react';
import styles from './buttons.module.css';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../../../store/store';
import { TimerStatus } from '../../../enums/TimerStatus';
import { StopStateButtons } from './StopStateButtons';
import { InProgressStateButtons } from './InProgressStateButtons';
import { InProgressPausedStateButtons } from './InProgressPausedStateButtons';
import { BreakStateButtons } from './BreakStateButtons';
import { BreakPausedStateButtons } from './BreakPausedStateButtons';

export function Buttons() {
  const { timer } = useStoreon<State, Events>('timer');

  return (
    <div className={styles.buttonsComponent}>
      {timer.status === TimerStatus.Stop && (<StopStateButtons />)}
      {timer.status === TimerStatus.InProgress && (<InProgressStateButtons />)}
      {timer.status === TimerStatus.InProgressPaused && (<InProgressPausedStateButtons />)}
      {timer.status === TimerStatus.Break && (<BreakStateButtons />)}
      {timer.status === TimerStatus.BreakPaused && (<BreakPausedStateButtons />)}
    </div>
  );
}
