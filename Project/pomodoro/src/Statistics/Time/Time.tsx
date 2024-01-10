import React, { useEffect, useState } from 'react';
import styles from './time.module.css';
import { useSelectedStat } from '../../hooks/useSelectedStat';
import { HOUR, MIN, SEC } from '../../constants/time';

export function Time() {
  const [ selectedStat ] = useSelectedStat();
  const [hours, setHours] = useState('0');
  const [minutes, setMinutes] = useState('0');

  useEffect(() => {
    if (selectedStat) {
      const hr = Math.floor((selectedStat.workedTime / HOUR) / SEC);
      setHours( hr.toString() );
      const min = Math.floor((selectedStat.workedTime % HOUR) / MIN);
      setMinutes( min.toString() );
    }
  }, [selectedStat]);
  
  return (
    <div className={styles.timeComponent}>
      <h4 className={styles.title}>Суббота</h4>
      <span className={styles.description}>
        {!selectedStat && "Нет данных"}
        {selectedStat && (
          <>
            Вы работали над задачами в течение
            <span className={styles.time}> {hours}ч {minutes}м</span>
          </>
        )}
      </span>
    </div>
  );
}
