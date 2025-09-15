import React from 'react';
import { useConfig } from '../../Providers/ConfigProvider/ConfigContext';

export function BackendDisplay() {
  const { BACKEND_BASE } = useConfig();

  return (
    <div>
      <strong>Backend URL:</strong> {BACKEND_BASE}
    </div>
  );
}
