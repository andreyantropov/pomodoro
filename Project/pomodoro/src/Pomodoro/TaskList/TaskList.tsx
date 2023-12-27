import React from 'react';
import styles from './tasklist.module.css';
import { Task } from './Task/Task';
import { useStoreon } from 'storeon/react';
import { Events, State } from '../../store/store';

export function TaskList() {
  const { tasks } = useStoreon<State, Events>('tasks');

  return (
      <ul className={styles.list}>
        { tasks.map(({ id, text, isEdit, tomatoes }) => (
            <Task
              key={id}
              id={id}
              text={text}
              isEdit={isEdit}
              tomatoes={tomatoes}
            />
          ))
        }
      </ul>
  );
}
