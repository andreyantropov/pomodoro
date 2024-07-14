import React, { ChangeEvent, FormEvent, useEffect, useRef } from 'react';
import styles from './taskeditform.module.css';

interface TaskEditFormProps {
  value: string;
  isEdit?: boolean;
  OnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  OnKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  OnBlur: () => void;
  OnSubmit: (e: FormEvent) => void;
}

export function TaskEditForm({ value, isEdit = false, OnChange, OnSubmit, OnKeyDown, OnBlur }: TaskEditFormProps) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEdit) {
      ref.current?.focus();
    }
  }, [isEdit]);
  
  return (
    <form action="" onSubmit={OnSubmit}>
      <input className={styles.input} type="text" value={value} minLength={3} maxLength={30} onChange={OnChange} onKeyDown={OnKeyDown} onBlur={OnBlur} disabled={!isEdit} ref={ref} required />
    </form>
  );
}
