import React from 'react';
import styles from './buttons.module.css';
import { Button } from '../../Button';

interface ButtonsProps {
  OnDefaultClick?: () => void;
}

export function Buttons({ OnDefaultClick }: ButtonsProps) {
  return (
    <div className={styles.btnContainer}>
      <Button className={styles.btn} text='Сохранить' style='primary' type="submit" />
      <Button className={styles.btn} text='По умолчанию' style='secondary' OnClick={OnDefaultClick} />
    </div>
  );
}
