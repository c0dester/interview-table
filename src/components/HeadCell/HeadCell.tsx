import React, { FunctionComponent } from 'react';

import { ArrowTurn } from '../../types';

import StyledRoot from './styled/Root';
import StyledArrow from './styled/Arrow';

interface HeadCellPropsType {
  width: number;
  isLast: boolean;
  arrowTurn: ArrowTurn;
  onClick: () => void;
}

const HeadCell: FunctionComponent<HeadCellPropsType> = ({
  width,
  isLast,
  onClick,
  children,
  arrowTurn,
}) => (
  <StyledRoot width={width} isLast={isLast} onClick={onClick}>
    {children}
    {arrowTurn && <StyledArrow turn={arrowTurn} />}
  </StyledRoot>
);

export default HeadCell;
