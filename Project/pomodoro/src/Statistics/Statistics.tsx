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
  const { stats, selectedDate } = useStoreon<State, Events>('stats', 'selectedDate');
  const [stat, setStat] = useState(stats.find(stat => stat.date === selectedDate));

  useEffect(() => {
    setStat(stats.find(stat => stat.date === selectedDate) ? stats.find(stat => stat.date === selectedDate) : { date: selectedDate, tomatoes: 0, plannedTomatoes: 0, pauses: 0, workedTime: 0, pausedTime: 0 });
  }, [stats, selectedDate]);

  return (
    <section>
      <div className={styles.container}>
        <Title />
        <div className={styles.statistics}>
          <div className={styles.mainStats}>
            <Time time={stat?.workedTime} />
            <Tomato tomatoes={stat?.tomatoes} />
          </div>
          <Plot statistics={stats} />
        </div>
        <Metrics statistics={stat} />
      </div>
    </section>
  );
}
