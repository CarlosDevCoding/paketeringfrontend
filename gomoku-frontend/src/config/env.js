//SSR-safe access to env (Vite/Node)
export const readEnv = () => {
  const env =
    (typeof import.meta !== 'undefined' && import.meta.env) ||
    process.env ||
    {};
  return {
    DEV: !!env.DEV,
    MODE: env.MODE || env.NODE_ENV || 'development',
    API_BASE_URL:
      env.VITE_API_BASE_URL || env.API_BASE_URL || env.API_BASE_URL || '',
  };
};
