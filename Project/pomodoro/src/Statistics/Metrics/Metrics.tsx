import React from 'react';
import styles from './metrics.module.css';
import { MetricList } from './MetricList';
import { Icons } from '../../enums/Icons';
import { generateId } from '../../utils/generateRandomIndex';
import { useSelectedStat } from '../../hooks/useSelectedStat';

export function Metrics() {
  const [ selectedStat ] = useSelectedStat();
  
  const focus = selectedStat ? ((selectedStat.tomatoes / selectedStat.plannedTomatoes) * 100).toString() + '%' : '0%';
  const pausedTime = selectedStat ? Math.floor(selectedStat.pausedTime / 60_000).toString() + 'м' : '0м';
  const pauses = selectedStat ? selectedStat.pauses.toString() : '0';

  const metricItems = [
    {
      icon: Icons.Focus,
      title: 'Фокус',
      stat: focus,
    },
    {
      icon: Icons.Clock,
      title: 'Время на паузе',
      stat: pausedTime,
    },
    {
      icon: Icons.Stop,
      title: 'Остановки',
      stat: pauses,
    },
  ].map(generateId);

  return (
    <MetricList metrics={metricItems} />
  );
}
