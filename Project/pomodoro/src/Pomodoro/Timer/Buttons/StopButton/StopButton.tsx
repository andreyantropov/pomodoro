import React, { useState } from 'react';
import styles from './stopbutton.module.css';
import { useStoreon } from 'storeon/react';
import { Button } from '../../../../Button';
import { TimerStatus } from '../../../../enums/TimerStatus';
import { State, Events } from '../../../../store/store';

export function StopButton() {
  const { dispatch, timer, settings } = useStoreon<State, Events>('timer', 'settings');
  const [ disabled, setDisabled ] = useState(timer.status === TimerStatus.Stop);

  function handleStopClick() {
    dispatch('timer/update', {...timer, status: TimerStatus.Stop, time: settings.workTime});
  }
  
  return (
    <Button className={styles.btn} text='Стоп' style='secondary' disabled={disabled} OnClick={handleStopClick} />
  );
}
