import { HeadersType } from '../types';

export default (headers: HeadersType): number =>
  headers.reduce((totalWidth, { width }) => totalWidth + (width || 0), 0);
