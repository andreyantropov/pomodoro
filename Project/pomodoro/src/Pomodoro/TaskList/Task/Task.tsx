import React, { ChangeEvent, FormEvent, KeyboardEvent, useState } from 'react';
import styles from './task.module.css';
import { Menu } from './Menu';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../../../store/store';

interface TaskProps {
  id: string;
  text: string;
  isEdit: boolean;
}

export function Task({ id, text, isEdit }: TaskProps) {
  const { dispatch } = useStoreon<State, Events>();
  const [task, setTask] = useState(text);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setTask(e.target.value);
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      setTask(text);
      dispatch('tasks/update', { id: id, text: task, isEdit: false, });
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch('tasks/update', { id: id, text: task, isEdit: false, });
  }

  return (
    <li className={styles.taskComponent}>
      <div className={styles.taskContainer}>
        <span className={styles.number}>1</span>
        <form action="" onSubmit={handleSubmit}>
          <input className={styles.input} type="text" value={task} minLength={3} maxLength={30} onChange={handleChange} onKeyDown={handleKeyDown} disabled={!isEdit} required />
        </form>
      </div>
      <Menu id={id} text={text} isEdit={isEdit} />
    </li>
  );
}
