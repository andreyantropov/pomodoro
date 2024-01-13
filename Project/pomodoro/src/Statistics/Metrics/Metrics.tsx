import React from 'react';
import styles from './metrics.module.css';
import { MetricList } from './MetricList';
import { Icons } from '../../enums/Icons';
import { generateId } from '../../utils/generateRandomIndex';
import { useSelectedStat } from '../../hooks/useSelectedStat';
import { Metric } from '../../interfaces/metric';
import { HOUR, MIN, SEC } from '../../constants/time';

export function Metrics() {
  const [selectedStat] = useSelectedStat();
  
  const focus = calcFocus();
  const pausedTime = calcPausedTime();
  const pauses = calcPauses();

  function calcFocus() {
    if (!selectedStat) {
      return undefined;
    } else if (!selectedStat.plannedTomatoes) {
      return '0%';
    } else {
      const focus = (selectedStat.tomatoes / selectedStat.plannedTomatoes) * 100;
      return `${focus}%`;
    }
  }

  function calcPausedTime() {
    if (!selectedStat) {
      return undefined;
    } else {
      const hr = Math.floor((selectedStat.workedTime / HOUR) / SEC);
      const min = Math.floor((selectedStat.workedTime % HOUR) / MIN);
      const time = hr ? `${hr}ч ${min.toString().padStart(2, '0')}м` : `${min}м`;
      return time;
    }
  }

  function calcPauses() {
    if (!selectedStat) {
      return undefined;
    } else {
      return selectedStat.pauses.toString();
    }
  }

  const metricItems: Metric[] = [
    {
      icon: Icons.Focus,
      title: 'Фокус',
      stat: focus,
      defaultValue: '0%',
      metricStyleClass: focus ? styles.focus : undefined,
      iconStyleClass: focus ? styles.focusIcon : undefined,
    },
    {
      icon: Icons.Clock,
      title: 'Время на паузе',
      stat: pausedTime,
      defaultValue: '0м',
      metricStyleClass: pausedTime ? styles.pausedTime : undefined,
      iconStyleClass: pausedTime ? styles.clockIcon : undefined,
    },
    {
      icon: Icons.Stop,
      title: 'Остановки',
      stat: pauses,
      defaultValue: '0',
      metricStyleClass: pauses ? styles.pauses : undefined,
      iconStyleClass: pauses ? styles.stopIcon : undefined,
    },
  ].map(generateId);

  return (
    <MetricList metrics={metricItems} />
  );
}
