import React, { useEffect, useState } from 'react';
import { Props, State } from './Footer.interfaces';
import { Wrapper } from './Footer.styles';

const GAME_SECS = 60;

const Footer: React.FunctionComponent<Props & State> = ({
  gamePaused = false,
  score = 0,
  onTimeEnds,
  iniTime,
}: Props & State) => {
  const [counter, setCounter] = useState(GAME_SECS);
  useEffect(() => {
    setCounter(GAME_SECS);
  }, [iniTime]);

  useEffect(() => {
    counter > 0 && setTimeout(() => {
      if(!gamePaused) {
        setCounter(counter - 1);
      };
    }, 1000);

    if (counter === 0 && onTimeEnds) {
      onTimeEnds();
    };
  }, [counter, gamePaused, onTimeEnds]);

  return (
    <Wrapper>
      <div>Time: {counter} sec</div>
      <div>Score: {score}</div>
    </Wrapper>
  );
};

export default Footer;
