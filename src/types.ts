export interface HeaderType {
  accessor: string;
  name: string;
  width: number;
}

export type HeadersType = Array<HeaderType>;

export type DataEntityType = { [accessor: string]: string };

export type TableDataType = Array<DataEntityType>;

export type ArrowTurn = 'up' | 'down' | undefined;
