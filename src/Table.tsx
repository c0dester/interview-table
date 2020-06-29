import React, { FunctionComponent, useRef } from 'react';
import 'styled-components/macro';

import { calculateHeadersWidth, useTableWidth } from './utils';
import { HeadersType, HeaderType, TableDataType, DataEntityType } from './types';
import {
  createWrapperStyles,
  createScrollerStyles,
  createTableStyles,
  createHeadCellStyles,
  rowStyles,
  createCellStyles,
} from './styles';

interface TablePropsType {
  headers: HeadersType;
  data: TableDataType;
  maxWidth: number;
}

const createHeadCellRenderer = (shouldStickLastColumn: boolean, lastIndex: number) => (
  { name, width }: HeaderType,
  idx: number
) => (
  <th key={idx} css={createHeadCellStyles(width, shouldStickLastColumn && idx === lastIndex)}>
    {name}
  </th>
);
const createRowRenderer = (headers: HeadersType, shouldStickLastColumn: boolean) => (
  entity: {
    [accessor: string]: string;
  },
  idx: number
) => (
  <div css={rowStyles} key={idx}>
    {headers.map(({ width, accessor }, headerIdx: number) => (
      <div
        key={headerIdx}
        css={createCellStyles(
          width,
          shouldStickLastColumn && headerIdx === headers.length - 1,
          idx
        )}
        title={entity[accessor]}
      >
        {entity[accessor]}
      </div>
    ))}
  </div>
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
        <div css={createTableStyles(tableWidth)}>
          <div css={rowStyles}>
            {headers.map(createHeadCellRenderer(isTableWiderThanWrapper, headers.length - 1))}
          </div>
          {data.map(createRowRenderer(headers, isTableWiderThanWrapper))}
        </div>
      </div>
    </div>
  );
};

export default Table;
