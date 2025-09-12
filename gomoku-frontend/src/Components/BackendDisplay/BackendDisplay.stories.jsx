import React from 'react';
import { BackendDisplay } from './BackendDisplay';
import { withConfig } from '../../../.storybook/withConfig';

export default {
  title: 'Example/BackendDisplay',
  component: BackendDisplay,
  decorators: [withConfig],
};

// Default story uses the global decorator withConfig
export const Default = () => <BackendDisplay />;
