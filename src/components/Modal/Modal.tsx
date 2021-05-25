import React, { useEffect } from 'react';
import ReactDOM from "react-dom";
import { Props, State } from './Modal.interfaces';
import { Wrapper, BG, Modal } from './Modal.styles';

const ModalComponent: React.FunctionComponent<Props & State> = ({
  children,
  isOpen = false,
  onIni = () => {},
}: Props & State) => {
  useEffect(() => {
    onIni();
    // eslint-disable-next-line
  }, []);

  return isOpen ? ReactDOM.createPortal(
    <Wrapper>
      <BG />
      <Modal>{children}</Modal>
    </Wrapper>,
      document.body
  ) : null;
};

export default ModalComponent;
