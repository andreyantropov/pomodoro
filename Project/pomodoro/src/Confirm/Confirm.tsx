import React, { useEffect, useRef } from 'react';
import styles from './confirm.module.css';
import { Icon } from '../Icon';
import { Icons } from '../enums/Icons';
import ReactDOM from 'react-dom';

interface ConfirmProps {
  title?: string;
  message?: string;
  confirmBtnText?: string;
  cancelBtnText?: string;
  isOpen?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const noop = () => {};

export function Confirm({ title = 'Подтверждение', message = '', confirmBtnText = 'Ок', cancelBtnText = 'Отмена', isOpen = false, onConfirm = noop, onCancel = noop }: ConfirmProps) {
  const [isShown, setIsShown] = React.useState(isOpen);
  useEffect(() => setIsShown(isOpen), [isOpen]);

  const ref = useRef<HTMLDivElement>(null);

  const node = document.querySelector('#confirm');
  if (!node) return null;

  return (
    <>
      {isShown && ReactDOM.createPortal((
        <div className={styles.background}>
          <div className={styles.dialog} ref={ref}>
            <button className={styles.closeBtn} onClick={onCancel}>
              <Icon name={Icons.Close} className={styles.closeIcon} />
            </button>
            <h2 className={styles.title}>{title}</h2>
            <span className={styles.message}>{message}</span>
            <button className={styles.okBtn} onClick={onConfirm}>{confirmBtnText}</button>
            <button className={styles.cancelBtn} onClick={onCancel}>{cancelBtnText}</button>
          </div>
        </div>
      ), node)}
    </>
  );
}
