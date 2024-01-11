import React, { useEffect, useState } from 'react';
import styles from './time.module.css';
import { useSelectedStat } from '../../hooks/useSelectedStat';
import { HOUR, MIN, SEC } from '../../constants/time';
import { WeekDays } from '../../enums/WeekDays';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../../store/store';

export function Time() {
  const [ selectedStat ] = useSelectedStat();
  const { selectedDate } = useStoreon<State, Events>('selectedDate');
  const [weekDay, setWeekDay] = useState('Воскресенье');
  const [hours, setHours] = useState('0');
  const [minutes, setMinutes] = useState('0');

  useEffect(() => {
    const weekDayNumber = new Date(selectedDate).getDay();
    switch (weekDayNumber) {
      case WeekDays.Sunday:
        setWeekDay('Воскресенье');
        break;
      case WeekDays.Monday:
        setWeekDay('Понедельник');
        break;
      case WeekDays.Tuesday:
        setWeekDay('Вторник');
        break;
      case WeekDays.Wednesday:
        setWeekDay('Среда');
        break;
      case WeekDays.Thursday:
        setWeekDay('Четверг');
        break;
      case WeekDays.Friday:
        setWeekDay('Пятница');
        break;
      case WeekDays.Saturday:
        setWeekDay('Суббота');
        break;
    }
  }, [selectedDate]);

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
      <h4 className={styles.title}>{weekDay}</h4>
      <span className={styles.description}>
        {!selectedStat && "Нет данных"}
        {selectedStat && (
          <React.Fragment>
            Вы работали над задачами в течение
            <span className={styles.time}> {hours}ч {minutes}м</span>
          </React.Fragment>
        )}
      </span>
    </div>
  );
}
