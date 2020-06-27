import React, { FunctionComponent } from 'react';
import 'styled-components/macro';

import calculateTableWidth from './utils/calculateTableWidth';
import { HeadersType, HeaderType, TableDataType } from './types';
import {
  createWrapperStyles,
  createTableStyles,
  createHeadCellStyles,
  rowStyles,
  cellStyles,
} from './styles';

type TablePropsType = {
  headers: HeadersType;
  data: TableDataType;
  width?: number;
};

const renderHeadCell = ({ name, width }: HeaderType) => (
  <th css={createHeadCellStyles(width)}>{name}</th>
);
const createRowRenderer = (data: TableDataType) => ({ id }: HeaderType) => (
  <tr css={rowStyles}>
    {data[id].map((cell: string) => (
      <td css={cellStyles}>{cell}</td>
    ))}
  </tr>
);

const Table: FunctionComponent<TablePropsType> = ({ headers, data, width }) => (
  <div css={createWrapperStyles(width)}>
    {console.log(width)}
    <table css={createTableStyles(calculateTableWidth(headers))}>
      <thead>
        <tr>{headers.map(renderHeadCell)}</tr>
      </thead>
      <tbody>{headers.map(createRowRenderer(data))}</tbody>
    </table>
  </div>
);

export default Table;
