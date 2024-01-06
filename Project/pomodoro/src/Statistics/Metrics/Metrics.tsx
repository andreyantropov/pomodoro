import React from 'react';
import styles from './metrics.module.css';
import { MetricList } from './MetricList';
import { Icons } from '../../enums/Icons';
import { generateId } from '../../utils/generateRandomIndex';
import { Statistic } from '../../interfaces/statistic';

interface MetricsProps {
  statistics?: Statistic;
}

export function Metrics({ statistics }: MetricsProps) {
  const focus = statistics ? ((statistics.tomatoes / statistics.plannedTomatoes) * 100).toString() + '%' : '0%';
  const pausedTime = statistics ? Math.floor(statistics.pausedTime / 60_000).toString() + 'м' : '0м';
  const pauses = statistics ? statistics.pauses.toString() : '0';

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
