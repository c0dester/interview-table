import React, { FunctionComponent } from 'react';

import StyledRoot from './styled/Root';
import AnimatedText from './styled/AnimatedText';

interface BodyCellPropsType {
  width: number;
  isLast: boolean;
  idx: number;
  shouldAnimate: boolean | null;
  children: string;
}

const BodyCell: FunctionComponent<BodyCellPropsType> = ({
  width,
  isLast,
  idx,
  children,
  shouldAnimate,
}) => (
  <StyledRoot width={width} isLast={isLast} idx={idx} title={children}>
    <AnimatedText shouldAnimate={shouldAnimate} idx={idx}>
      {children}
    </AnimatedText>
  </StyledRoot>
);

export default BodyCell;
