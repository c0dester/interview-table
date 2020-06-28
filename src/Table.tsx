import React, { FunctionComponent, useRef } from 'react';
import 'styled-components/macro';

import { calculateHeadersWidth, useTableWidth } from './utils';
import { HeadersType, HeaderType, TableDataType } from './types';
import {
  createWrapperStyles,
  createScrollerStyles,
  createTableStyles,
  createHeadCellStyles,
  rowStyles,
  createCellStyles,
} from './styles';

type TablePropsType = {
  headers: HeadersType;
  data: TableDataType;
  maxWidth: number;
};

const createHeadCellRenderer = (shouldStickLastColumn: boolean) => (
  { name, width }: HeaderType,
  idx: number
) => (
  <th key={idx} css={createHeadCellStyles(width, shouldStickLastColumn)}>
    {name}
  </th>
);
const createRowRenderer = (headers: HeadersType, shouldStickLastColumn: boolean) => (
  entity: {
    [accessor: string]: string;
  },
  idx: number
) => (
  <tr key={idx} css={rowStyles}>
    {headers.map(({ width, accessor }, headerIdx: number) => (
      <td
        key={headerIdx}
        css={createCellStyles(width, shouldStickLastColumn, idx)}
        title={entity[accessor]}
      >
        {entity[accessor]}
      </td>
    ))}
  </tr>
);

const Table: FunctionComponent<TablePropsType> = ({ headers, data, maxWidth }) => {
  const wrapperRef = useRef(null);
  const [wrapperWidth] = useTableWidth(wrapperRef, !Boolean(maxWidth));
  const resolvedWrapperWidth = maxWidth || wrapperWidth;
  const headersWidth = calculateHeadersWidth(headers);
  const isTableWiderThanWrapper = headersWidth > resolvedWrapperWidth;
  const lastColumnWidth = headers[headers.length - 1].width;
  const tableWidth = isTableWiderThanWrapper ? headersWidth - lastColumnWidth : headersWidth;
  const scrollerWidth = isTableWiderThanWrapper
    ? resolvedWrapperWidth - lastColumnWidth
    : resolvedWrapperWidth;
  return (
    <div css={createWrapperStyles(maxWidth)} ref={wrapperRef}>
      <div css={createScrollerStyles(scrollerWidth)}>
        <table css={createTableStyles(tableWidth)}>
          <thead>
            <tr>{headers.map(createHeadCellRenderer(isTableWiderThanWrapper))}</tr>
          </thead>
          <tbody>{data.map(createRowRenderer(headers, isTableWiderThanWrapper))}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
