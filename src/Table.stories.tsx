import React from 'react';
import { withKnobs, object, number } from '@storybook/addon-knobs';
import faker from 'faker';

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
    accessor: 'firstName',
    name: 'First Name',
    width: 100,
  },
  {
    accessor: 'lastName',
    name: 'Last Name',
    width: 120,
  },
  {
    accessor: 'email',
    name: 'E-mail',
    width: 220,
  },
  {
    accessor: 'address',
    name: 'Address',
    width: 250,
  },
];

const defaultData: TableDataType = new Array(10).fill(null).map(() => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  address: faker.fake('{{address.streetAddress}}, {{address.city}} {{address.zipCode}}'),
}));

export const table = () => {
  const headersKnob = object('Headers', defaultHeaders, tableDataGroupId);
  const dataKnob = object('Data', defaultData, tableDataGroupId);
  const maxWidthKnob = number('Max Width', 550, {}, 'Dimensions');
  return <Table maxWidth={maxWidthKnob} headers={headersKnob} data={dataKnob} />;
};
