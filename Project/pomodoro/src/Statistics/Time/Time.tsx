import React, { useEffect, useState } from 'react';
import styles from './time.module.css';
import { useSelectedStat } from '../../hooks/useSelectedStat';
import { HOUR, MIN, SEC } from '../../constants/time';
import { WeekDays } from '../../enums/WeekDays';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../../store/store';

export function Time() {
  const [selectedStat] = useSelectedStat();
  const { selectedDate } = useStoreon<State, Events>('selectedDate');
  const [weekDay, setWeekDay] = useState('Воскресенье');
  const [time, setTime] = useState('Нет данных');

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
    if (!selectedStat) {
      setTime('Нет данных');
    } else {
      const hr = Math.floor((selectedStat.workedTime / HOUR) / SEC);
      const min = Math.floor((selectedStat.workedTime % HOUR) / MIN);
      hr ? setTime(`${hr}ч ${min}м`) : setTime(`${min}м`);
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
            <span className={styles.time}> {time}</span>
          </React.Fragment>
        )}
      </span>
    </div>
  );
}
