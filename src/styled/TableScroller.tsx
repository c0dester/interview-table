import styled from 'styled-components';

interface StyledTableScrollerPropsType {
  width: number;
}

const StyledTableScroller = styled.div<StyledTableScrollerPropsType>`
  width: ${({ width }) => `${width}px`};
  overflow-x: auto;
`;

export default StyledTableScroller;
