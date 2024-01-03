import React, { ReactNode } from 'react';
import styles from './metriclist.module.css';

interface MetricListProps {
  children?: ReactNode;
}

export function MetricList({ children }: MetricListProps) {
  return (
    <ul className={styles.metricList}>
      {children}
    </ul>
  );
}
