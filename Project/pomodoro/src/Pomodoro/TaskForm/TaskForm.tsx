import React, { ChangeEvent, FormEvent } from 'react';
import styles from './taskform.module.css';

interface TaskFormProps {
  value: string;
  OnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  OnSubmit: (e: FormEvent) => void;
}

export function TaskForm({ value, OnChange, OnSubmit }: TaskFormProps) {
  return (
    <form className={styles.form} action="" onSubmit={OnSubmit}>
      <input className={styles.input} type="text" placeholder="Название задачи" value={value} onChange={OnChange} />
      <button className={styles.addBtn} type="submit">Добавить</button>
    </form>
  );
}
