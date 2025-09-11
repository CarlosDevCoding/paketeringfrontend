export const buildDefaults = () => {
  const { DEV, MODE, API_BASE_URL } = readEnv();
  const baseURL = DEV ? 'http://localhost:8080' : API_BASE_URL;

  return Object.freeze({
    env: MODE,
    API_BASE_URL: baseURL,
    PAGE_LINKS,
    AUTH_STATUS,
    AUTH_RANKS,
    AUTH_ROUTES,
    COOKIE_KEYS,
  });
};
