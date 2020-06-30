import styled from 'styled-components';

interface StyledArrowPropsType {
  turn: 'up' | 'down';
}

const StyledArrow = styled.div<StyledArrowPropsType>`
  width: 0px;
  height: 0px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid ${({ turn }) => (turn === 'up' ? '#27e33d' : '#d60000')};
  position: absolute;
  right: 5px;
  top: ${35 / 2 - 2.5}px;
  ${({ turn }) => (turn === 'down' ? 'transform: rotate(180deg);' : '')};
`;

export default StyledArrow;
