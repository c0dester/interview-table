import styled, { css } from 'styled-components';

interface StyledRootPropsType {
  width: number;
  isLast: boolean;
}

const lastCellMixin = css<StyledRootPropsType>`
  position: absolute;
  right: 2px;
  flex: initial;
  width: ${({ width }) => `${width}px`};
`;

const StyledRoot = styled.div<StyledRootPropsType>`
  background-color: #1a6cf0;
  color: #fff;
  padding: 8px 5px;
  border-bottom: 0.5px solid #c9c5c5;
  border-left: 0.5px solid #c9c5c5;
  box-sizing: border-box;
  flex: 1 0 ${({ width }) => `${width}px`};
  ${({ isLast }) => (isLast ? lastCellMixin : '')}
`;

export default StyledRoot;
