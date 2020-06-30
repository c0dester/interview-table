import styled, { keyframes, css } from 'styled-components';

interface AnimatedTextPropsType {
  idx: number;
  shouldAnimate: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const animationMixin = css<AnimatedTextPropsType>`
  opacity: 0;
  animation: ${fadeIn} linear 0.2s;
  animation-delay: ${({ idx }) => `${idx * 0.05}s`};
  animation-fill-mode: forwards;
`;

const AnimatedText = styled.div<AnimatedTextPropsType>`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;

  ${({ shouldAnimate }) =>
    shouldAnimate === true ? animationMixin : shouldAnimate === false ? 'opacity: 0;' : ''}
`;

export default AnimatedText;
