import React from 'react';
import styles from './menu.module.css';
import { DropDown } from '../../../../DropDown';
import { generateId } from '../../../../utils/generateRandomIndex';
import { MenuItemList } from './MenuItemList';
import { Icon } from '../../../../Icon';
import { Icons } from '../../../../enums/Icons';

const menuItems = [
  {
    icon: Icons.ZoomIn,
    text: 'Увеличить',
    OnClick: () => console.log(''),
  },
  {
    icon: Icons.ZoomOut,
    text: 'Уменьшить',
    OnClick: () => console.log(''),
  },
  {
    icon: Icons.Edit,
    text: 'Редактировать',
    OnClick: () => console.log(''),
  },
  {
    icon: Icons.Delete,
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
            <Icon name={Icons.Menu} />
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
