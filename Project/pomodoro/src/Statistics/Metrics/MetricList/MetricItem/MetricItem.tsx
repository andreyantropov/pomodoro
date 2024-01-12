import React, { useEffect, useState } from 'react';
import styles from './metricitem.module.css';
import { Icon } from '../../../../Icon';
import { Metric } from '../../../../interfaces/metric';
import classNames from 'classnames';

interface MetricItemProps {
  metric: Metric;
}

export function MetricItem({ metric }: MetricItemProps) {
  const [metricItemClasses, setMetricItemClasses] = useState(styles.metricItemComponent);

  useEffect(() => {
    if (metric.metricStyleClass) {
      const metricStyleClass = classNames(
        styles.metricItemComponent,
        metric.metricStyleClass,
      );
      setMetricItemClasses(metricStyleClass);
    }
  }, []);

  return (
    <li className={metricItemClasses}>
      <div>
        <h4 className={styles.title}>{metric.title}</h4>
        <span className={styles.stat}>{metric.stat ?? metric.defaultValue}</span>
      </div>
      <Icon className={metric.iconStyleClass} name={metric.icon} size={130} />
    </li>
  );
}
