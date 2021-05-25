import styled, { css } from 'styled-components';

export const Panel = styled.div`
  margin: .1em;
  padding: 0;
  display: block;
  position: relative;
  perspective: 600px;
  background: transparent;
  border: none;
  font-size: inherit;
  cursor: pointer;
`;

export const Card = styled.div`
  height: inherit;
  position: absolute;
  top: 0;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  transition: all .4s ease-in-out;
`;
export const CardFront = styled(Card)`
  z-index: 900;
  transform: rotateX(0deg) rotateY(0deg);
`;
export const CardBack = styled(Card)`
  z-index: 1000;
  transform: rotateY(-180deg);
`;

export const Box = styled.div`
  width: .8em;
  height: .8em;
  margin: 0 auto;
  border-radius: 4px;
`;
export const Box1: any = styled(Box)`
  background: var(--color-main);
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("${(props: any) => props.imgUrl }");
`;
export const Box2 = styled(Box)`
  background: var(--color-sec);
  &:hover {
    background: var(--color-sec-dark);
  }
`;

export const Wrapper: any = styled.button`
  box-sizing: border-box;
  transition: opacity .2s;
  min-height: 1em;
  min-width: 1em;
  font-size: 80px;

  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;

  ${({ isDiscovered }: any) => isDiscovered && `
    opacity: .3;
  `}

  ${({ active }: any) => active && css`
    ${CardFront} {
      z-index: 900;
      transform: rotateY(180deg);
    }
    ${CardBack} {
      z-index: 1000;
      transform: rotateX(0deg) rotateY(0deg);
    }
  `}
`;