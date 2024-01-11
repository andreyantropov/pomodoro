import React from 'react';
import styles from './metrics.module.css';
import { MetricList } from './MetricList';
import { Icons } from '../../enums/Icons';
import { generateId } from '../../utils/generateRandomIndex';
import { useSelectedStat } from '../../hooks/useSelectedStat';
import { Metric } from '../../interfaces/metric';
import { MIN } from '../../constants/time';

export function Metrics() {
  const [ selectedStat ] = useSelectedStat();
  
  const focus = calcFocus();
  const pausedTime = calcPausedTime();
  const pauses = calcPauses();

  function calcFocus() {
    if (selectedStat && selectedStat.plannedTomatoes) {
      return (selectedStat.tomatoes / selectedStat.plannedTomatoes) * 100;
    }
    return 0;
  }

  function calcPausedTime() {
    if (selectedStat) {
      return Math.round(selectedStat.pausedTime / MIN);
    }
    return 0;
  }

  function calcPauses() {
    if (selectedStat) {
      return selectedStat.pauses;
    }
    return 0;
  }

  const metricItems: Metric[] = [
    {
      icon: Icons.Focus,
      title: 'Фокус',
      stat: focus,
      unit: '%',
      metricStyleClass: styles.focus,
      iconStyleClass: styles.focusIcon,
    },
    {
      icon: Icons.Clock,
      title: 'Время на паузе',
      stat: pausedTime,
      unit: 'м',
      metricStyleClass: styles.pausedTime,
      iconStyleClass: styles.clockIcon,
    },
    {
      icon: Icons.Stop,
      title: 'Остановки',
      stat: pauses,
      metricStyleClass: styles.pauses,
      iconStyleClass: styles.stopIcon,
    },
  ].map(generateId);

  return (
    <MetricList metrics={metricItems} />
  );
}
