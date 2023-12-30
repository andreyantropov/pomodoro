import React from 'react';
import styles from './icon.module.css';
import { EqualizerIcon } from './EqualizerIcon';
import { SettingsIcon } from './SettingsIcon';
import { EditIcon } from './EditIcon';
import { DeleteIcon } from './DeleteIcon';
import { MenuIcon } from './MenuIcon';
import { PlusIcon } from './PlusIcon';
import { IncreaseIcon } from './IncreaseIcon';
import { DecreaseIcon } from './DecreaseIcon';
import { Icons } from '../enums/Icons';

interface IconProps {
  name: Icons;
  size?: number;
  className?: string;
}

export function Icon({ name, size, className }: IconProps) {
  const renderSwitch = (param: string) => {
    switch(param) {
      case Icons.Equalizer:
        return <EqualizerIcon size={size} className={className} />;
      case Icons.Settings:
        return <SettingsIcon size={size} className={className} />;
      case Icons.Edit:
        return <EditIcon size={size} />;
      case Icons.Delete:
        return <DeleteIcon size={size} />;
      case Icons.Menu:
        return <MenuIcon size={size} />;
      case Icons.Plus:
        return <PlusIcon size={size} className={className} />;
      case Icons.Increase:
        return <IncreaseIcon size={size} />;
      case Icons.Decrease:
        return <DecreaseIcon size={size} />;
      default:
        return <div></div>;
    }
  }

  return (
    <>
      {renderSwitch(name)}
    </>
  );
}
