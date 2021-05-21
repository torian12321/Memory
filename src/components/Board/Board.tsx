import React from 'react';
import Tile from '../Tile';
import { Props, State } from './Board.interfaces';
import { Wrapper } from './Board.styles';

const Board: React.FunctionComponent<Props & State> = ({
  className,
  tiles = [],
}: Props & State) => {
  const renderTiles = () => (
    tiles.map((tileId, i: number) => <Tile key={`${i}-${tileId}`} id={tileId} index={i} />)
  );

  return (
    <Wrapper className={className}>
      {renderTiles()}
    </Wrapper>
  );
};

export default Board;
