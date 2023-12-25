import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './taskform.module.css';

interface TaskFormProps {
  text?: string;
}

export function TaskForm({ text="" }: TaskFormProps) {
  const [task, setTask] = useState(text);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setTask(e.target.value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(task);
    setTask('');
  }

  return (
    <form className={styles.form} action="" onSubmit={handleSubmit}>
      <input className={styles.input} type="text" placeholder="Название задачи" value={task} onChange={handleChange} />
      <button className={styles.addBtn} type="submit">Добавить</button>
    </form>
  );
}
