import React, { useState } from 'react';
import styles from './timer.module.css';
import { Title } from './Title';
import { Events, State } from '../../store/store';
import { useStoreon } from 'storeon/react';
import { Clock } from './Clock';
import { Buttons } from './Buttons';
import { isRunningContext } from '../../contexts/IsRunning';

interface TimerProps {
  currentTask?: Task;
}

interface Task {
  id: number;
  text: string;
  isEdit: boolean;
  tomatoes: number;
  currentTomato: number;
}

export function Timer({ currentTask }: TimerProps) {
  const { timer } = useStoreon<State, Events>('timer');
  const [isRunning, setIsRunning] = useState(false);

  const IsRunningProvider  = isRunningContext.Provider;

  return (
    <div className={styles.timerComponent}>
      <IsRunningProvider value={{
                        isRunning: isRunning,
                        OnChange: setIsRunning,
      }}>
        <Title task={currentTask ? currentTask.text : 'Задача отсутствует'} tomato={currentTask ? currentTask.currentTomato : 0} />
        <Clock timer={timer} />

        <div className={styles.taskContainer}>
          <span className={styles.number}>Задача 1 - </span>
          <span className={styles.task}>{currentTask ? currentTask.text : 'Задача отсутствует'}</span>
        </div>

        <Buttons isDisabled={!currentTask} />
      </IsRunningProvider>
    </div>
  );
}
