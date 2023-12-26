import { nanoid } from 'nanoid';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../../store/store';
import { TaskForm } from '../TaskForm/TaskForm';

export function TaskFormContainer() {
  const { dispatch } = useStoreon<State, Events>();
  const [value, setValue] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch('tasks/add', { id: nanoid(), text: value.trim(), isEdit: false, });
    setValue('');
  }
  
  return (
    <TaskForm value={value} OnChange={handleChange} OnSubmit={handleSubmit} />
  );
}
