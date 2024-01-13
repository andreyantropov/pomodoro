import React, { useEffect } from 'react';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../../store/store';

export const themeContext = React.createContext<'light' | 'dark'>('light');

export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const { settings } = useStoreon<State, Events>('settings');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', settings.theme);
  }, [settings]);
  
  return (
      <themeContext.Provider value={settings.theme}>
          {children}
      </themeContext.Provider>
  );
}
