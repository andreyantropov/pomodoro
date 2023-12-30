import React from 'react';
import styles from './tasks.module.css';
import { TaskFormContainer } from './TaskFormContainer';
import { TaskList } from './TaskList';
import { Total } from './Total';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../../store/store';

export function Tasks() {
  const { tasks } = useStoreon<State, Events>('tasks');
  
  return (
    <>
      <TaskFormContainer />
      <TaskList tasks={tasks} />
      <Total tasks={tasks} />
    </>
  );
}
