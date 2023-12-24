import React from 'react';
import styles from './menu.module.css';
import { DropDown } from '../../../../DropDown';
import { generateId } from '../../../../utils/generateRandomIndex';
import { MenuItemList } from './MenuItemList';

const menuItems = [
  {
    icon: '',
    text: 'Увеличить',
    OnClick: () => console.log(''),
  },
  {
    icon: '',
    text: 'Уменьшить',
    OnClick: () => console.log(''),
  },
  {
    icon: '',
    text: 'Редактировать',
    OnClick: () => console.log(''),
  },
  {
    icon: '',
    text: 'Удалить',
    OnClick: () => console.log(''),
  },
].map(generateId);

export function Menu() {
  return (
    <div className={styles.menuComponent}>
      <DropDown
        button={
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="6" viewBox="0 0 26 6" fill="none">
              <circle cx="3" cy="3" r="3" fill="#C4C4C4"/>
              <circle cx="13" cy="3" r="3" fill="#C4C4C4"/>
              <circle cx="23" cy="3" r="3" fill="#C4C4C4"/>
            </svg>
          </button>
        }
      >
        <div className={styles.dropdown}>
          <MenuItemList items={menuItems} />
        </div>
      </DropDown>
    </div>
  );
}
