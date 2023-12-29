import React, { useContext } from 'react';
import styles from './buttons.module.css';
import { isRunningContext } from '../../../contexts/IsRunning';

interface ButtonsProps {
  isDisabled: boolean;
}

export function Buttons({ isDisabled }: ButtonsProps) {
  const { OnChange } = useContext(isRunningContext);

  const handleStartClick = () => {
    OnChange(true);
  }

  const handleStopClick = () => {
    OnChange(false);
  }

  return (
    <div className={styles.buttonsComponent}>
      <button className={styles.startBtn} onClick={handleStartClick}>Старт</button>
      <button className={styles.stopBtn} onClick={handleStopClick} disabled={isDisabled}>Стоп</button>
    </div>
  );
}
