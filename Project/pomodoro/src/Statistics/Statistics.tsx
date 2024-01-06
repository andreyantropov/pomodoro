import React, { useEffect, useState } from 'react';
import styles from './statistics.module.css';
import { Title } from './Title';
import { Plot } from './Plot';
import { Time } from './Time';
import { Tomato } from './Tomato';
import { Metrics } from './Metrics';
import { useStoreon } from 'storeon/react';
import { Events, State } from '../store/store';

export function Statistics() {
  const { stats } = useStoreon<State, Events>('stats');
  const [currentDate, setCurrentDate] = useState(new Date().getDate());
  const [stat, setStat] = useState(stats.find(stat => stat.date === currentDate));

  useEffect(() => {
    setStat(stats.find(stat => stat.date === currentDate));
  }, [stats]);

  return (
    <section>
      <div className={styles.container}>
        <Title />
        <div className={styles.statistics}>
          <div className={styles.mainStats}>
            <Time time={stat?.workedTime} />
            <Tomato tomatoes={stat?.tomatoes} />
          </div>
          <Plot />
        </div>
        <Metrics statistics={stat} />
      </div>
    </section>
  );
}
