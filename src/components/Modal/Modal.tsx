import React, { useEffect, useCallback } from 'react';
import ReactDOM from "react-dom";
import { Props, State } from './Modal.interfaces';
import { Wrapper, BG, Modal } from './Modal.styles';

const ModalComponent: React.FunctionComponent<Props & State> = ({
  children,
  isOpen = false,
  onIni = () => {},
}: Props & State) => {
  const memoizedCallback = useCallback(() => {
    onIni();
  }, [onIni],);
  useEffect(() => {
    memoizedCallback();
  }, [memoizedCallback]);

  return isOpen ? ReactDOM.createPortal(
    <Wrapper>
      <BG />
      <Modal>{children}</Modal>
    </Wrapper>,
      document.body
  ) : null;
};

export default ModalComponent;
