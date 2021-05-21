import React from 'react';
import classNames from 'classnames';
import { Props, State } from './Tile.interfaces';
import styles from './Tile.module.scss';


const Tile: React.FunctionComponent<Props & State> = ({
  id,
  isSelected = false,
  isDiscovered = false,
  onClick = (e: Event) => {},
}: Props & State) => {
  const handleClick = () => {
    if (!isSelected && !isDiscovered && onClick) {
      onClick();
    };
  };

  return (
    <button
      onClick={handleClick}
      className={classNames(
        styles.wrapper,
        isDiscovered && styles.discovered,
        isSelected && styles.selected,
      )}
    >
      <div
        aria-label={`tile-${id}`}
        className={styles.panel}
      >
        {id}
        <div className={styles.front}>
          <div className={styles.box1} />
        </div>
        <div className={styles.back}>
          <div className={styles.box2} />
        </div>
      </div>
    </button>
  );
};

export default Tile;
