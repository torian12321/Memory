import React, { useEffect } from 'react';
import { Board } from '../components/Board';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import ModalEndGame from './App.ModalEndGame';
import { Props, State } from './App.interfaces';
import { Wrapper, Body } from './App.styles';

const App: React.FunctionComponent<Props & State> = ({ onLoad }) => {
  useEffect(() => {
    onLoad();
  }, [onLoad]);

  return (
    <>
      <ModalEndGame />
      <Wrapper>
        <Header />
        <Body> 
          <Board />
        </Body>
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
