export interface HeaderType {
  accessor: string;
  name: string;
  width: number;
}

export type HeadersType = Array<HeaderType>;

export type TableDataType = Array<{ [accessor: string]: string }>;
