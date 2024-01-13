import React from 'react';
import styles from './title.module.css';
import classNames from 'classnames';
import { useCurrentTask } from '../../../hooks/useCurrentTask';
import { useStoreon } from 'storeon/react';
import { Events, State } from '../../../store/store';
import { TimerStatus } from '../../../enums/TimerStatus';

export function Title() {
  const { timer } = useStoreon<State, Events>('timer');
  const [currentTask] = useCurrentTask();
  
  const titleContainerClasses = classNames(
    styles.titleContainer,
    { [styles.inProgress]: timer.status === TimerStatus.InProgress },
    { [styles.break]: timer.status === TimerStatus.Break },
  );
  
  return (
    <div className={titleContainerClasses}>
      <h3 className={styles.title}>{currentTask ? currentTask.text : 'Задача отсутствует'}</h3>
      <span className={styles.tomato}>Помидор {currentTask ? currentTask.currentTomato : 0}</span>
    </div>
  );
}
