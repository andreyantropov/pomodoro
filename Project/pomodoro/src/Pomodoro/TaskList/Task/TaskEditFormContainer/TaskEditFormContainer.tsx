import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './taskeditformcontainer.css';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../../../../store/store';
import { TaskEditForm } from '../TaskEditForm/TaskEditForm';

interface TakeEditFormContainer {
  id: number;
  text: string;
  isEdit?: boolean;
  tomatoes: number;
}

export function TaskEditFormContainer({ id, text, isEdit = false, tomatoes }: TakeEditFormContainer) {
  const { dispatch } = useStoreon<State, Events>();
  const [value, setValue] = useState(text);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Escape') {
      setValue(text);
      dispatch('tasks/update', { id: id, text: value, isEdit: false, tomatoes: tomatoes });
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch('tasks/update', { id: id, text: value, isEdit: false, tomatoes: tomatoes });
  }

  return (
    <TaskEditForm value={value} isEdit={isEdit} OnChange={handleChange} OnKeyDown={handleKeyDown} OnSubmit={handleSubmit} />
  );
}
