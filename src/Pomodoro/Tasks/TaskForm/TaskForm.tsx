import React, { ChangeEvent, FormEvent } from 'react';
import styles from './taskform.module.css';
import { Button } from '../../../Button';

interface TaskFormProps {
  value: string;
  OnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  OnSubmit: (e: FormEvent) => void;
}

export function TaskForm({ value, OnChange, OnSubmit }: TaskFormProps) {
  return (
    <form className={styles.form} action="" onSubmit={OnSubmit}>
      <input className={styles.input} type="text" placeholder="Название задачи" value={value} minLength={3} maxLength={30} onChange={OnChange} required />
      <Button className={styles.addBtn} style='primary' text='Добавить' OnClick={OnSubmit} />
    </form>
  );
}
