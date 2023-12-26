import React from 'react';
import styles from './menu.module.css';
import { DropDown } from '../../../../DropDown';
import { generateId } from '../../../../utils/generateRandomIndex';
import { MenuItemList } from './MenuItemList';
import { Icon } from '../../../../Icon';
import { Icons } from '../../../../enums/Icons';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../../../../store/store';

interface MenuProps {
  id: string;
  text: string;
}

export function Menu({ id, text, }: MenuProps) {
  const { dispatch, tasks } = useStoreon<State, Events>('tasks');

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
      OnClick: () => dispatch('tasks/delete', { id, text, }),
    },
  ].map(generateId);

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
