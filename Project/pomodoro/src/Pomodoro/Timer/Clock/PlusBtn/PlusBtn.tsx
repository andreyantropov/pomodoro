import React from 'react';
import styles from './plusbtn.module.css';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../../../../store/store';
import { Icon } from '../../../../Icon';
import { Icons } from '../../../../enums/Icons';

export function PlusBtn() {
  const { dispatch, timer, settings } = useStoreon<State, Events>('timer', 'settings');

  function handleClick() {
    dispatch('timer/update', {...timer, time: timer.time + settings.additionalTime});
  }

  return (
    <button className={styles.btn} onClick={handleClick}>
      <Icon name={Icons.Plus} className={styles.plusIcon} />
    </button>
  );
}
