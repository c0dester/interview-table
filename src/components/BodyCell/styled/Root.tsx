import styled, { css } from 'styled-components';

interface StyledRootPropsType {
  width: number;
  isLast: boolean;
  idx: number;
}

const lastCellMixin = css<StyledRootPropsType>`
  position: absolute;
  right: 2px;
  width: ${({ width }) => `${width}px`};
  border-right: 0.5px solid #c9c5c5;
  background-color: ${({ idx }) => (idx % 2 === 1 ? '#dadee6' : '#fff')};
`;

const StyledRoot = styled.div<StyledRootPropsType>`
  padding: 2px 5px;
  box-sizing: border-box;
  height: 23px;
  border-bottom: 0.5px solid #c9c5c5;
  border-left: 0.5px solid #c9c5c5;
  flex: 1 0 ${({ width }) => `${width}px`};
  ${({ isLast }) =>
    isLast
      ? lastCellMixin
      : `&:last-of-type  {
          border-right: 0.5px solid #c9c5c5;
        }`}
`;

export default StyledRoot;
