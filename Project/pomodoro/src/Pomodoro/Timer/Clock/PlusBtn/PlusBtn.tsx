import React from 'react';
import styles from './plusbtn.module.css';
import { Timer } from '../../../../interfaces/timer';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../../../../store/store';
import { Icon } from '../../../../Icon';
import { Icons } from '../../../../enums/Icons';

interface PlusBtnProps {
  timer: Timer;
}

export function PlusBtn({ timer }: PlusBtnProps) {
  const { dispatch } = useStoreon<State, Events>();

  function handleClick() {
    dispatch('timer/time/set', timer.time + 60_000);
  }

  return (
    <button className={styles.btn} onClick={handleClick}>
      <Icon name={Icons.Plus} className={styles.plusIcon} />
    </button>
  );
}
