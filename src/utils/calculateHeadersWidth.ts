import { HeadersType } from '../types';

const calculateHeadersWidth = (headers: HeadersType): number =>
  headers.reduce((totalWidth, { width }) => totalWidth + (width || 0), 0);

export default calculateHeadersWidth;
