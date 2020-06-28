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
    accessor: 'firstName',
    name: 'Imię',
    width: 100,
  },
  {
    accessor: 'lastName',
    name: 'Nazwisko',
    width: 120,
  },
  {
    accessor: 'profession',
    name: 'Zawód',
    width: 100,
  },
  {
    accessor: 'address',
    name: 'Adres',
    width: 250,
  },
];

const defaultData: TableDataType = [
  {
    firstName: 'Jan',
    lastName: 'Kowalski',
    profession: 'Piekarz',
    address: 'ul. Szeroka 22 99-999 Warszawa',
  },
  {
    firstName: 'Mateusz',
    lastName: 'Nowak',
    profession: 'Stolarz',
    address: 'ul. Długa 1 99-999 Warszawa',
  },
  {
    firstName: 'Marian',
    lastName: 'Polak',
    profession: 'Dekarz',
    address: 'ul. Wąska 9 99-999 Warszawa',
  },
  {
    firstName: 'Anna',
    lastName: 'Kowalska',
    profession: 'Szwaczka',
    address: 'ul. Wysoka 11B/2, 99-999 Warszawa, woj. mazowieckie',
  },
];

export const table = () => {
  const headersKnob = object('Headers', defaultHeaders, tableDataGroupId);
  const dataKnob = object('Data', defaultData, tableDataGroupId);
  const maxWidthKnob = number('Max Width', 500, {}, 'Dimensions');
  return <Table maxWidth={maxWidthKnob} headers={headersKnob} data={dataKnob} />;
};
