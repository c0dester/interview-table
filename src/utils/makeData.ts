import faker from 'faker';

import { TableDataType } from '../types';

const makeData = (times: number): TableDataType =>
  new Array(times).fill(null).map(() => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    address: faker.fake('{{address.streetAddress}}, {{address.city}} {{address.zipCode}}'),
  }));

export default makeData;
