import React from 'react';
import styles from './tasks.module.css';
import { TaskFormContainer } from './TaskFormContainer';
import { TaskList } from './TaskList';
import { Total } from './Total';

export function Tasks() {  
  return (
    <>
      <TaskFormContainer />
      <TaskList />
      <Total />
    </>
  );
}
