export const createWrapperStyles = (width?: number) => `
  width: ${width ? `${width}px` : '100%'};
  position: relative;
`;

export const createScrollerStyles = (width: number) => `
  width: ${width}px;
  overflow-x: auto;
`;

export const createTableStyles = (width: number) => `
  border-collapse: collapse;
  table-layout: fixed;
  width: ${width}px;
`;

export const createHeadCellStyles = (width: number, shouldStickLastColumn: boolean) => `
  background-color: #1a6cf0;
  color: #fff;
  padding: 8px 5px;
  border-bottom: 0.5px solid #c9c5c5;
  border-left: 0.5px solid #c9c5c5;
  box-sizing: border-box;
  flex: 1 0 ${width}px;

  ${
    shouldStickLastColumn
      ? `
          position: absolute;
          right: 1px;
          width: ${width}px;
        `
      : ''
  }
`;

export const rowStyles = `
  display: flex;

  &:nth-child(odd) {
    background-color: #dadee6;
  }
`;

export const createCellStyles = (width: number, shouldStickLastColumn: boolean, idx: number) => `
  padding: 2px 5px;
  box-sizing: border-box;
  height: 23px;
  border-bottom: 0.5px solid #c9c5c5;
  border-left: 0.5px solid #c9c5c5;
  ${
    shouldStickLastColumn
      ? `
          position: absolute;
          right: 1px;
          width: ${width}px;
          border-right: 0.5px solid #c9c5c5;
          ${idx % 2 === 1 ? 'background-color: #dadee6' : ''};
        `
      : `
          &:last-of-type  {
            border-right: 0.5px solid #c9c5c5;
          }
        `
  }
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  flex: 1 0 ${width}px;
`;
