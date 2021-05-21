import React from 'react';
import classNames from 'classnames';
import Tile from '../Tile';
import { Props, State } from './Board.interfaces';
import styles from './Board.module.scss';

const Board: React.FunctionComponent<Props & State> = ({
  className,
  tiles = [],
}: Props & State) => {
  const renderTiles = () => (
    tiles.map((tileId, i: number) => <Tile key={`${i}-${tileId}`} id={tileId} index={i} />)
  );

  return (
    <div className={classNames(styles.board, className)}>
      {renderTiles()}
    </div>
  );
};

export default Board;
