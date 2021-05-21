import React from 'react';
import Tile from '../Tile';
import { Props } from './Board.interfaces';
import { Wrapper } from './Board.styles';

const Board: React.FunctionComponent<Props> = ({
  className,
  tiles = [],
}: Props) => {
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
