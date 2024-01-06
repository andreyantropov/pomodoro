import React, { useEffect, useState } from 'react';
import styles from './time.module.css';

interface TimeProps {
  time?: number;
}

export function Time({ time }: TimeProps) {
  const [hours, setHours] = useState('0');
  const [minutes, setMinutes] = useState('0');

  useEffect(() => {
    if (time) {
      const hr = Math.floor((time / 3_600_000) / 1000);
      setHours( hr.toString() );
      const min = Math.floor((time % 3_600_000) / 60_000);
      setMinutes( min.toString() );
    }
  }, [time]);
  
  return (
    <div className={styles.timeComponent}>
      <h4 className={styles.title}>Суббота</h4>
      <span className={styles.time}>
        {hours === '0' && minutes === '0' && "Нет данных"}
        {hours !== '0' && hours + 'ч'}
        {minutes !== '0' && minutes + 'м'}
      </span>
    </div>
  );
}
