export interface HeaderType {
  id: string;
  name: string;
  width: number;
}

export type HeadersType = Array<HeaderType>;

export interface TableDataType {
  [headerName: string]: Array<string>;
}
