import React from 'react';
import styles from './button.module.css';
import classNames from 'classnames';

interface ButtonProps {
  text: string;
  style: 'primary' | 'secondary';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  OnClick?: (e: any) => void;
}

export function Button({ text, style, className, disabled = false, type = 'button', OnClick }: ButtonProps) {
  const buttonClasses = classNames(
    styles.btn,
    { [styles.primaryBtn]: style === 'primary' },
    { [styles.secondaryBtn]: style === 'secondary' },
    className,
  );

  return (
    <button className={buttonClasses} onClick={OnClick} disabled={disabled} type={type}>{text}</button>
  );
}