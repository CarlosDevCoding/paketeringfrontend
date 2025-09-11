import { createContext, useContext } from 'react';

export const ConfigCtx = createContext(null);

export const useConfig = () => {
  const ctx = useContext(ConfigCtx);
  if (!ctx) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return ctx;
};
