import { useMemo } from 'react';
import { ConfigCtx } from './configCtx';
import getConfig from './config';

export const ConfigProvider = ({ overrides, children }) => {
  const config = useMemo(() => getConfig(overrides), [overrides]);
  return <ConfigCtx.Provider value={config}>{children}</ConfigCtx.Provider>;
};

export { ConfigCtx, getConfig };
