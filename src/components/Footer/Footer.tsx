import React, { useEffect, useState } from 'react';
import { Props, State } from './Footer.interfaces';
import { Wrapper } from './Footer.styles';

const Footer: React.FunctionComponent<Props & State> = ({
  iniTime,
  score = 0,
  onTimeEnds,
}: Props & State) => {
  const [counter, setCounter] = React.useState(60);
  // const [counter, setCounter] = React.useState(60);

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);

    if (counter === 0 && onTimeEnds) {
      onTimeEnds();
    };
  }, [counter]);

  return (
    <Wrapper>
      <div>Time: {counter} sec</div>
      <div>Score: {score}</div>
    </Wrapper>
  );
};

export default Footer;
