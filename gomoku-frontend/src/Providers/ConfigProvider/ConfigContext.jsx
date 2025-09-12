import { createContext, useContext } from 'react';

export const ConfigContext = createContext(undefined);

export function useConfig() {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfig must be used inside a ConfigProvider');
  }
  return context;
}
