import React, { useEffect, useState } from 'react';
import styles from './time.module.css';
import { useSelectedStat } from '../../hooks/useSelectedStat';

export function Time() {
  const [ selectedStat ] = useSelectedStat();
  const [hours, setHours] = useState('0');
  const [minutes, setMinutes] = useState('0');

  useEffect(() => {
    if (selectedStat) {
      const hr = Math.floor((selectedStat.workedTime / 3_600_000) / 1000);
      setHours( hr.toString() );
      const min = Math.floor((selectedStat.workedTime % 3_600_000) / 60_000);
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
