import React from 'react';
import { withKnobs, object, number } from '@storybook/addon-knobs';

import Table from './Table';
import { HeadersType, TableDataType } from './types';

export default {
  component: Table,
  title: 'Table',
  decorators: [withKnobs],
};

const tableDataGroupId = 'Table Data';
const defaultHeaders: HeadersType = [
  {
    id: 'column1',
    name: 'Column 1',
    width: 100,
  },
  {
    id: 'column2',
    name: 'Column 2 longer',
    width: 200,
  },
  {
    id: 'column3',
    name: 'Col 3',
    width: 50,
  },
];

const defaultData: TableDataType = {
  column1: ['val 1', 'val 2', 'val 3'],
  column2: ['val 1', 'val 2', 'val 3'],
  column3: ['val 1', 'val 2', 'val 3'],
};

export const table = () => {
  const headersKnob = object('Headers', defaultHeaders, tableDataGroupId);
  const dataKnob = object('Data', defaultData, tableDataGroupId);
  const widthKnob = number('Width', 400, {}, 'Dimensions');
  return <Table width={widthKnob} headers={headersKnob} data={dataKnob} />;
};
