import styled from 'styled-components';

interface StyledTablePropsType {
  width: number;
}

const StyledTable = styled.div<StyledTablePropsType>`
  width: ${({ width }) => `${width}px`};
  border-collapse: collapse;
  table-layout: fixed;
`;

export default StyledTable;
