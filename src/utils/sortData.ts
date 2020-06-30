import { TableDataType } from '../types';

const sortData = (type: 'asc' | 'desc', data: TableDataType, accessor: string) =>
  [...data].sort((a, b) => {
    if (a[accessor] < b[accessor]) {
      return type === 'asc' ? -1 : 1;
    } else if (a[accessor] > b[accessor]) {
      return type === 'asc' ? 1 : -1;
    }
    return 0;
  });

export default sortData;
