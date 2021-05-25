import React from 'react';
import { Props } from './Header.interfaces';
import { Wrapper } from './Header.styles';

const Header: React.FunctionComponent<Props> = ({
  className,
}: Props) => {
  return (
    <Wrapper className={className}>
      Memory Game
    </Wrapper>
  );
};

export default Header;
