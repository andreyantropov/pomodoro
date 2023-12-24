import React from 'react';
import styles from './icon.module.css';
import { EqualizerIcon } from './EqualizerIcon';
import { SettingsIcon } from './SettingsIcon';
import { EditIcon } from './EditIcon';
import { DeleteIcon } from './DeleteIcon';
import { MenuIcon } from './MenuIcon';
import { PlusIcon } from './PlusIcon';
import { ZoomInIcon } from './ZoomInIcon';
import { ZoomOutIcon } from './ZoomOutIcon';

interface IconProps {
  name: string;
  size?: number;
}

export function Icon({ name, size = 16 }: IconProps) {
  const renderSwitch = (param: string) => {
    switch(param) {
      case Icons.Equalizer:
        return <EqualizerIcon size={size} />;
      case Icons.Settings:
        return <SettingsIcon size={size} />;
      case Icons.Edit:
        return <EditIcon size={size} />;
      case Icons.Delete:
        return <DeleteIcon size={size} />;
      case Icons.Menu:
        return <MenuIcon size={size} />;
      case Icons.Plus:
        return <PlusIcon size={size} />;
      case Icons.ZoomIn:
        return <ZoomInIcon size={size} />;
      case Icons.ZoomOut:
        return <ZoomOutIcon size={size} />;
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
