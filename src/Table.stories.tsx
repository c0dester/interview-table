import React from 'react';
import { withKnobs, object, number } from '@storybook/addon-knobs';

import Table from './Table';
import { TableDataType } from './types';
import { makeData } from './utils';
import DEFAULT_HEADERS from './constants/defaultHeaders';

export default {
  component: Table,
  title: 'Table',
  decorators: [withKnobs],
};

const tableDataGroupId = 'Table Data';

const defaultData: TableDataType = makeData(10);

export const table = () => {
  const headersKnob = object('Headers', DEFAULT_HEADERS, tableDataGroupId);
  const dataKnob = object('Data', defaultData, tableDataGroupId);
  const maxWidthKnob = number('Max Width', 550, {}, 'Dimensions');
  return <Table maxWidth={maxWidthKnob} headers={headersKnob} data={dataKnob} />;
};
