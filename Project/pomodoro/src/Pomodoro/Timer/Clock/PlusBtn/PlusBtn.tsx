import React from 'react';
import styles from './plusbtn.module.css';
import { Timer } from '../../../../interfaces/timer';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../../../../store/store';
import { Icon } from '../../../../Icon';
import { Icons } from '../../../../enums/Icons';
import { MIN } from '../../../../constants/time';

interface PlusBtnProps {
  timer: Timer;
  additionalTime?: number;
}

export function PlusBtn({ timer, additionalTime = MIN }: PlusBtnProps) {
  const { dispatch } = useStoreon<State, Events>();

  function handleClick() {
    dispatch('timer/update', {...timer, time: timer.time + additionalTime});
  }

  return (
    <button className={styles.btn} onClick={handleClick}>
      <Icon name={Icons.Plus} className={styles.plusIcon} />
    </button>
  );
}
