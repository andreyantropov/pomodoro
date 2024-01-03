import React from 'react';
import styles from './statistics.module.css';
import { Title } from './Title';
import { MetricList } from './MetricList';
import { Plot } from './Plot';
import { Time } from './Time';
import { Tomato } from './Tomato';

export function Statistics() {
  return (
    <section>
      <div className={styles.container}>
        <Title />
        <div>
          <div className={styles.mainStats}>
            <Time />
            <Tomato />
          </div>
          <Plot />
        </div>
        <MetricList />
      </div>
    </section>
  );
}
