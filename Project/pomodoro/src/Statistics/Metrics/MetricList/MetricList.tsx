import React from 'react';
import styles from './metriclist.module.css';
import { MetricItem } from './MetricItem';
import { Metric } from '../../../interfaces/metric';

interface MetricListProps {
  metrics: Metric[];
}

export function MetricList({ metrics }: MetricListProps) {
  return (
    <ul className={styles.metricList}>
      { metrics.map((metric) => (
        <MetricItem key={metric.id} metric={metric} />
      )) }
    </ul>
  );
}
