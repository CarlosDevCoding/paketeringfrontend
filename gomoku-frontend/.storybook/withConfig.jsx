import React from 'react';
import { ConfigContext } from '../src/Providers/ConfigProvider/ConfigContext';

// Fake Storybook decorator (no env dependencies)
export const withConfig = (Story) => {
  const fakeConfig = {
    BACKEND_BASE: 'http://storybook-fake-backend:9999',
  };

  return (
    <ConfigContext.Provider value={fakeConfig}>
      <Story />
    </ConfigContext.Provider>
  );
};
