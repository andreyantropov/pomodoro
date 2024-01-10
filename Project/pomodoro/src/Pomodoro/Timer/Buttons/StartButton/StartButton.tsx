import React from 'react';
import styles from './startbutton.module.css';
import { useStoreon } from 'storeon/react';
import { Button } from '../../../../Button';
import { TimerStatus } from '../../../../enums/TimerStatus';
import { State, Events } from '../../../../store/store';

export function StartButton() {
  const { dispatch, timer, settings } = useStoreon<State, Events>('timer', 'settings');
  
  function handleStartClick() {
    dispatch('timer/update', {...timer, status: TimerStatus.InProgress, time: settings.workTime});
  }

  return (
    <Button className={styles.btn} text='Старт' style='primary' OnClick={handleStartClick} />
  );
}
