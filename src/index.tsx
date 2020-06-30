import React from 'react';
import ReactDOM from 'react-dom';

import { makeData } from './utils';
import DEFAULT_HEADERS from './constants/defaultHeaders';

import Table from './Table';

ReactDOM.render(
  <Table data={makeData(10)} headers={DEFAULT_HEADERS} />,
  document.getElementById('root')
);
