import React from 'react';
import styles from './metricitem.module.css';
import { Icon } from '../../../../Icon';
import { Icons } from '../../../../enums/Icons';

interface MetricItemProps {
  id: string;
  title: string;
  stat: string;
  icon: Icons;
}

export function MetricItem({ id, title, stat, icon }: MetricItemProps) {
  return (
    <li className={styles.metricItemComponent}>
      <div>
        <h4 className={styles.title}>{title}</h4>
        <span className={styles.stat}>{stat}</span>
      </div>
      <Icon name={icon} size={130} />
    </li>
  );
}
