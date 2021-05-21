import React from 'react';
import { Props, State } from './Tile.interfaces';
import { Wrapper, Panel, CardFront, CardBack, Box1, Box2 } from './Tile.styles';

const Tile: React.FunctionComponent<Props & State> = ({
  id,
  isSelected = false,
  isDiscovered = false,
  imgUrl = '',
  onClick = (e: Event) => {},
}: Props & State) => {
  const active = (!isSelected && !isDiscovered);

  const handleClick = () => {
    if (active && onClick) {
      onClick();
    };
  };

  return (
    <Wrapper
      onClick={handleClick}
      active={active}
      isDiscovered={isDiscovered}
      
    >
      <Panel aria-label={`tile-${id}`}>
        <CardFront>
          <Box1 imgUrl={imgUrl} />
        </CardFront>
        <CardBack>
          <Box2 />
        </CardBack>
      </Panel>
    </Wrapper>
  );
};

export default Tile;
