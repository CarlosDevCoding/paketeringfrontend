{
  /*}
import { useMemo } from 'react';
import { ConfigCtx } from './configCtx';
import getConfig from './config';

export const ConfigProvider = ({ overrides, children }) => {
  const config = useMemo(() => getConfig(overrides), [overrides]);
  return <ConfigCtx.Provider value={config}>{children}</ConfigCtx.Provider>;
};

export { ConfigCtx, getConfig };
/*/
}

import { ConfigContext } from './ConfigContext';

export function ConfigProvider({ children }) {
  let BACKEND_BASE = '';

  if (import.meta.env.DEV) {
    BACKEND_BASE = 'http://localhost:8080';
  } else {
    BACKEND_BASE =
      import.meta.env.VITE_BACKEND_BASE || 'https://api.example.com';
  }

  return (
    <ConfigContext.Provider value={{ BACKEND_BASE }}>
      {children}
    </ConfigContext.Provider>
  );
}
