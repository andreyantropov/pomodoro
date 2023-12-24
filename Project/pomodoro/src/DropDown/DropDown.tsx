import React, { useEffect, useRef, useState } from 'react';
import styles from './dropdown.module.css';
import ReactDOM from 'react-dom';

interface IDropDownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const noop = () => {};

export function DropDown({ button, children, isOpen, onOpen = noop, onClose = noop, }: IDropDownProps) {
  const [isDropDownOpen, setIsDropdownOpen] = React.useState(isOpen);
  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(() => isDropDownOpen ? onOpen() : onClose(), [isOpen]);

  const ref = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    const x = rect.left;
    setX(x);

    const y = rect.top;
    setY(y);
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (e.target instanceof Node && !ref.current?.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropDownOpen);
    }
  }

  const node = document.querySelector('#dropdown');
  if (!node) return null;

  return (
    <div className={styles.dropdownComponent}>
      <div onClick={handleOpen} ref={ref}>
        {button}
      </div>
      {isDropDownOpen && ReactDOM.createPortal((
        <div className={styles.listContainer}>
          <div 
            className={styles.list} 
            style={{ top: y, left: x, }}
            onClick={() => setIsDropdownOpen(false)}
          >
            {children}
          </div>
        </div>
      ), node)}
    </div>
  );
}
