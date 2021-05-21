import React, { useEffect } from 'react';
import { Board } from '../components/Board';
import { Props, State } from './App.interfaces';
import './App.module.css';

const App: React.FunctionComponent<Props & State> = ({ onLoad }) => {
  useEffect(() => {
    onLoad();
  }, [onLoad]);

  return (
    <div className="App">
      <header className="App-header">
        <Board />
      </header>
    </div>
  );
}

export default App;
