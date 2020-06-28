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
  text-align: left;
  background-color: #1a6cf0;
  color: #fff;
  padding: 8px 5px;
  box-sizing: border-box;
  border: 1px solid #c9c5c5;
  width: ${width}px;

  ${(() =>
    shouldStickLastColumn
      ? `
        &:last-of-type {
          position: absolute;
          right: 1px;
          top: 0;
          border: 0.5px solid #c9c5c5;
          box-sizing: border-box;
          padding: 8px 5px;
        }
      `
      : '')()}
`;

export const rowStyles = `
  &:nth-child(even) {
    background-color: #dadee6;
  }
`;

export const createCellStyles = (width: number, shouldStickLastColumn: boolean, idx: number) => `
  padding: 2px 5px;
  box-sizing: border-box;
  border: 1px solid #c9c5c5;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: ${width}px;

  ${(() =>
    shouldStickLastColumn
      ? `
        &:last-of-type {
          position: absolute;
          right: 1px;
          border: 0.5px solid #c9c5c5;
          padding: 2.1px 5px;
          background-color: ${idx % 2 === 1 ? '#dadee6' : '#fff'}
        }
      `
      : '')()}
`;
