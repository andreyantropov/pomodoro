import React from 'react';
import styles from './button.module.css';

interface ButtonProps {
  text: string;
  style: 'primary' | 'secondary';
  disabled?: boolean;
  OnClick: () => void;
}

export function Button({ text, style, disabled = false, OnClick }: ButtonProps) {
  return (
    <button className={style === 'primary' ? styles.primaryBtn : styles.secondaryBtn} onClick={OnClick} disabled={disabled}>{text}</button>
  );
}
