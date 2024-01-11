import React from 'react';
import styles from './statistics.module.css';
import { Title } from './Title';
import { Plot } from './Plot';
import { Time } from './Time';
import { Tomato } from './Tomato';
import { Metrics } from './Metrics';

export function Statistics() {
  return (
    <section className={styles.statistics}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Title />
          <div className={styles.statistics}>
            <div className={styles.mainStats}>
              <Time />
              <Tomato />
            </div>
            <Plot />
          </div>
          <Metrics />
        </div>
      </div>
    </section>
  );
}
