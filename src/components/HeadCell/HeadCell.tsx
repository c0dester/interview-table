import React, { FunctionComponent } from 'react';

import StyledRoot from './styled/Root';

interface HeadCellPropsType {
  width: number;
  isLast: boolean;
  onClick: () => void;
}

const HeadCell: FunctionComponent<HeadCellPropsType> = ({ width, isLast, onClick, children }) => (
  <StyledRoot width={width} isLast={isLast} onClick={onClick}>
    {children}
  </StyledRoot>
);

export default HeadCell;
