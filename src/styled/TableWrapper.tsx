import styled from 'styled-components';

interface StyledTableWrapperPropsType {
  maxWidth: number;
}

const StyledTableWrapper = styled.div<StyledTableWrapperPropsType>`
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : 'initial')};
  position: relative;
`;

export default StyledTableWrapper;
