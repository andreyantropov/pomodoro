import React from 'react';
import styles from './metrics.module.css';
import { MetricList } from './MetricList';
import { MetricItem } from './MetricList/MetricItem';
import { Icons } from '../../enums/Icons';
import { generateId } from '../../utils/generateRandomIndex';

const metricItems = [
  {
    icon: Icons.Focus,
    title: 'Фокус',
    stat: '0%',
  },
  {
    icon: Icons.Clock,
    title: 'Время на паузе',
    stat: '0м',
  },
  {
    icon: Icons.Stop,
    title: 'Остановки',
    stat: '0',
  },
].map(generateId);

export function Metrics() {
  return (
    <MetricList metrics={metricItems} />
  );
}
