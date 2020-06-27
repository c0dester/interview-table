export const createWrapperStyles = (width?: number) => `
  width: ${width ? `${width}px` : '100%'};
  overflow-x: auto;
`;

export const createTableStyles = (width: number) => `
  border-collapse: collapse;
  table-layout: fixed;
  width: ${width}px;
`;

export const createHeadCellStyles = (width: number) => `
  text-align: left;
  background-color: #1a6cf0;
  color: #fff;
  padding: 8px 5px;
  box-sizing: border-box;
  border: 1px solid #c9c5c5;
  width: ${width}px;
`;

export const rowStyles = `
  &:nth-child(even) {
    background-color: #dadee6;
  }
`;

export const cellStyles = `
  padding: 2px 5px;
  box-sizing: border-box;
  border: 1px solid #c9c5c5;
`;
