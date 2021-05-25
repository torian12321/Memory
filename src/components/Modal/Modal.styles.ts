import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
  z-index: 100;
`;


const BG_fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 0.4; }
`;

export const BG = styled.div`
  position: fixed;
  z-index: 110;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--color-black);
  opacity: 0;

  animation: ${BG_fadeIn} 0.5s ease-in 1;
  animation-fill-mode: forwards;
`;

const Modal_fadeIn = keyframes`
  from {
    opacity: 0;
    margin-top: 16px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
`;
export const Modal = styled.div`
  position: fixed;
  z-index: 120;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 80vw;
  max-width: 600px;
  min-width: 200px;
  opacity: 0;
  background: white;
  padding: 24px;

  animation: ${Modal_fadeIn} 0.5s ease-in 1;
  animation-fill-mode: forwards;
  animation-delay: 0.3s;
  background: var(--color-white);
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);

  display: flex;
  flex-direction: column;
  text-align: center;
`;
