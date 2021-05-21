import React from 'react';
import { Props } from './Footer.interfaces';
import { Wrapper } from './Footer.styles';

const Footer: React.FunctionComponent<Props> = ({
  className,
  score = 0,
}: Props) => {
  return (
    <Wrapper className={className}>
      <div>Time: 60 sec</div>
      <div>Score: {score}</div>
    </Wrapper>
  );
};

export default Footer;
