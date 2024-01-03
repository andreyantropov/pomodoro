import React from 'react';
import styles from './metricitem.module.css';
import { Icon } from '../../../Icon';
import { Icons } from '../../../enums/Icons';

export function MetricItem() {
  return (
    <li className={styles.metricItemComponent}>
      <div>
        <h4 className={styles.title}>Фокус</h4>
        <span className={styles.stat}>0%</span>
      </div>
      <Icon name={Icons.Equalizer} size={130} />
    </li>
  );
}
