import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './taskeditformcontainer.css';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../../../../../store/store';
import { TaskEditForm } from '../TaskEditForm/TaskEditForm';
import { Task } from '../../../../../interfaces/task';

interface TakeEditFormContainer {
  task: Task;
}

export function TaskEditFormContainer({ task }: TakeEditFormContainer) {
  const { dispatch } = useStoreon<State, Events>();
  const [value, setValue] = useState(task.text);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Escape') {
      setValue(task.text);
      dispatch('tasks/update', { ...task, isEdit: false });
    }
  }

  function handleBlur() {
    setValue(task.text);
      dispatch('tasks/update', { ...task, isEdit: false });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch('tasks/update', { ...task, text: value.trim(), isEdit: false });
  }

  return (
    <TaskEditForm value={value} isEdit={task.isEdit} OnChange={handleChange} OnKeyDown={handleKeyDown} OnSubmit={handleSubmit} OnBlur={handleBlur} />
  );
}
