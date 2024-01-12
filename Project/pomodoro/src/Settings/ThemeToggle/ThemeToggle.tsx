import React from 'react';
import styles from './themetoggle.module.css';

interface ThemeToggleProps {
  checked: boolean;
  OnChange?: () => void;
}

export function ThemeToggle({ checked, OnChange }: ThemeToggleProps) {
  return (
    <label className={styles.themeToggle}>
      <input type="checkbox" checked={checked} onChange={OnChange} />
      <span className={styles.label}>Темная тема</span>
    </label>
  );
}
