import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './taskform.module.css';
import { useStoreon } from 'storeon/react';
import { Events, State } from '../../store/store';
import { nanoid } from 'nanoid';

interface TaskFormProps {
  text?: string;
}

export function TaskForm({ text="" }: TaskFormProps) {
  const { dispatch, tasks } = useStoreon<State, Events>('tasks');
  const [task, setTask] = useState(text);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setTask(e.target.value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch('tasks/add', { id: nanoid(), task: task, });
    setTask('');
  }

  return (
    <form className={styles.form} action="" onSubmit={handleSubmit}>
      <input className={styles.input} type="text" placeholder="Название задачи" value={task} onChange={handleChange} />
      <button className={styles.addBtn} type="submit">Добавить</button>
    </form>
  );
}
