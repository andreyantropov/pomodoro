import React, { ReactNode } from 'react';
import styles from './metriclist.module.css';
import { MetricItem } from './MetricItem';

export function MetricList() {
  return (
    <ul className={styles.metricList}>
      <MetricItem />
      <MetricItem />
      <MetricItem />
    </ul>
  );
}
