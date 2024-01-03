import React from 'react';
import styles from './metrics.module.css';
import { MetricList } from './MetricList';
import { MetricItem } from './MetricList/MetricItem';

export function Metrics() {
  return (
    <MetricList>
      <MetricItem />
      <MetricItem />
      <MetricItem />
    </MetricList>
  );
}
