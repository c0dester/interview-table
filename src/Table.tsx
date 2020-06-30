import React, { FunctionComponent, useRef, useState } from 'react';
import 'styled-components/macro';

import { calculateHeadersWidth, useTableWidth, sortData } from './utils';
import { HeadersType, TableDataType } from './types';
import { rowStyles } from './styles';

import HeadCell from './components/HeadCell';
import BodyCell from './components/BodyCell';

import StyledTableWrapper from './styled/TableWrapper';
import StyledTableScroller from './styled/TableScroller';
import StyledTable from './styled/Table';

interface TablePropsType {
  headers: HeadersType;
  data: TableDataType;
  maxWidth: number;
}

interface TableStateType {
  sortType: 'asc' | 'desc' | null;
  sortBy: string | null;
}

const Table: FunctionComponent<TablePropsType> = ({ headers, data, maxWidth }) => {
  const [{ sortType, sortBy }, setState] = useState<TableStateType>({
    sortType: null,
    sortBy: null,
  });
  const [wasSorted, setWasSorted] = useState<boolean | null>(null);
  const dataSorted = sortType && sortBy ? sortData(sortType, data, sortBy) : data;
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
  const onHeadCellClick = (headName: string) => {
    setWasSorted(false);
    let nextSortType: TableStateType['sortType'] = 'asc';
    if (headName === sortBy) {
      switch (sortType) {
        case null:
          nextSortType = 'asc';
          break;
        case 'asc':
          nextSortType = 'desc';
          break;
        case 'desc':
          nextSortType = null;
          break;
      }
    }
    const nextSortBy = nextSortType === null ? null : headName;
    setTimeout(() => setWasSorted(true), 0);
    setState({ sortType: nextSortType, sortBy: nextSortBy });
  };
  return (
    <StyledTableWrapper maxWidth={maxWidth}>
      <StyledTableScroller width={scrollerWidth}>
        <StyledTable width={tableWidth}>
          <div css={rowStyles}>
            {headers.map(({ width, name, accessor }, idx: number) => (
              <HeadCell
                key={idx}
                width={width}
                isLast={isTableWiderThanWrapper && idx === headers.length - 1}
                onClick={() => onHeadCellClick(accessor)}
              >
                {name}
              </HeadCell>
            ))}
          </div>
          {dataSorted.map((entity, dataIdx: number) => (
            <div key={dataIdx} css={rowStyles}>
              {headers.map(({ width, accessor }, headerIdx: number) => (
                <BodyCell
                  key={headerIdx}
                  width={width}
                  isLast={isTableWiderThanWrapper && headers.length - 1 === headerIdx}
                  idx={dataIdx}
                  shouldAnimate={wasSorted}
                >
                  {entity[accessor]}
                </BodyCell>
              ))}
            </div>
          ))}
        </StyledTable>
      </StyledTableScroller>
    </StyledTableWrapper>
  );
};

export default Table;
