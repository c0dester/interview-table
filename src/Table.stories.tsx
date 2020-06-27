import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Table from './Table';

export default {
  component: Table,
  title: 'Table',
  decorators: [withKnobs],
};

export const withText = () => <Table text={text('Text', 'Hello')} />;
