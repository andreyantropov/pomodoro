import React from 'react';
import styles from './donebutton.module.css';
import { useStoreon } from 'storeon/react';
import { Button } from '../../../../Button';
import { TimerStatus } from '../../../../enums/TimerStatus';
import { useCurrentStat } from '../../../../hooks/useCurrentStat';
import { State, Events } from '../../../../store/store';

export function DoneButton() {
  const { dispatch, timer, settings } = useStoreon<State, Events>('timer', 'settings');
  const [currentStat] = useCurrentStat();

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
    <Button className={styles.btn} text='Сделано' style='secondary' OnClick={handleDoneClick} />
  );
}
