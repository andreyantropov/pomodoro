import React, { ChangeEvent } from 'react';
import styles from './input.module.css';

interface InputProps {
  label: string;
  id: string;
  value: string;
  type?: React.HTMLInputTypeAttribute;
  min?: number;
  max?: number;
  required?: boolean;
  OnChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ label, id, value, type = 'number', min = 1, max = 60, required = true, OnChange }: InputProps) {
  return (
    <div className={styles.input}>
      <label className={styles.label} htmlFor={id}>{label}</label>
      <input className={styles.control} id={id} type={type} value={value} min={min} max={max} onChange={OnChange} required={required} />
    </div>
  );
}
