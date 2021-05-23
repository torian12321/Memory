import React, { useState } from 'react';
import { Props, State } from './Footer.interfaces';
import { Wrapper } from './Footer.styles';

const Footer: React.FunctionComponent<Props & State> = ({
  gamePaused = false,
  score = 0,
  onTimeEnds,
}: Props & State) => {
  const [counter, setCounter] = useState(60);

  React.useEffect(() => {
    counter > 0 && setTimeout(() => {
      if(!gamePaused) {
        setCounter(counter - 1);
      };
    }, 1000);

    console.log('counter', counter);
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
