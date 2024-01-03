import React from 'react';
import styles from './metriclist.module.css';
import { Icons } from '../../../enums/Icons';
import { MetricItem } from './MetricItem';

interface MetricListProps {
  metrics: Metric[];
}

interface Metric {
  id: string;
  title: string;
  stat: string;
  icon: Icons;
}

export function MetricList({ metrics }: MetricListProps) {
  return (
    <ul className={styles.metricList}>
      { metrics.map(({id, title, stat, icon}) => (
        <MetricItem key={id} id={id} title={title} stat={stat} icon={icon} />
      )) }
    </ul>
  );
}
