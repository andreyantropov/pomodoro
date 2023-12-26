import { nanoid } from 'nanoid';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../../store/store';
import { TaskForm } from '../TaskForm/TaskForm';

export function TaskFormContainer() {
  const { dispatch, tasks } = useStoreon<State, Events>('tasks');
  const [value, setValue] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch('tasks/add', { id: nanoid(), task: value.trim(), });
    setValue('');
  }
  return (
    <TaskForm value={value} OnChange={handleChange} OnSubmit={handleSubmit} />
  );
}
