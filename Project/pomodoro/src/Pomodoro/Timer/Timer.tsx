import React from 'react';
import styles from './timer.module.css';
import { PlusIcon } from '../../Icon/PlusIcon';
import { Title } from './Title';

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
  return (
    <div className={styles.timerComponent}>
      <Title task={currentTask ? currentTask.text : 'Задача отсутствует'} tomato={currentTask ? currentTask.currentTomato : 0} />

      <div className={styles.timerContainer}>
        <span className={styles.timer}>25:00</span>
        <button>
          <PlusIcon />
        </button>
      </div>

      <div className={styles.taskContainer}>
        <span className={styles.number}>Задача 1 - </span>
        <span className={styles.task}>Сверстать сайт</span>
      </div>

      <div className={styles.btnContainer}>
        <button className={styles.startBtn}>Старт</button>
        <button className={styles.stopBtn} disabled>Стоп</button>
      </div>
    </div>
  );
}
