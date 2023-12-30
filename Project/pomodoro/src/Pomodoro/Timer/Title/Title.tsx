import React from 'react';
import styles from './title.module.css';
import { Task } from '../../../interfaces/task';
import { Timer } from '../../../interfaces/timer';
import classNames from 'classnames';

interface TitleProps {
  currentTask?: Task;
  timer: Timer;
}

export function Title({ currentTask, timer }: TitleProps) {
  const titleContainerClasses = classNames(
    styles.titleContainer,
    { [styles.inProgress]: timer.status === 'in progress' },
    { [styles.break]: timer.status === 'break' },
  );
  
  return (
    <div className={titleContainerClasses}>
      <h3 className={styles.title}>{currentTask ? currentTask.text : 'Задача отсутствует'}</h3>
      <span className={styles.tomato}>Помидор {currentTask ? currentTask.currentTomato : 0}</span>
    </div>
  );
}
