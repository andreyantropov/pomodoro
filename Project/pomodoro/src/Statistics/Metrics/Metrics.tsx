import React from 'react';
import styles from './metrics.module.css';
import { MetricList } from './MetricList';
import { Icons } from '../../enums/Icons';
import { generateId } from '../../utils/generateRandomIndex';
import { useSelectedStat } from '../../hooks/useSelectedStat';
import { Metric } from '../../interfaces/metric';

export function Metrics() {
  const [ selectedStat ] = useSelectedStat();
  
  const focus = selectedStat ? Math.round((selectedStat.tomatoes / selectedStat.plannedTomatoes) * 100) : 0;
  const pausedTime = selectedStat ? Math.round(selectedStat.pausedTime / 60_000) : 0;
  const pauses = selectedStat ? selectedStat.pauses : 0;

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
