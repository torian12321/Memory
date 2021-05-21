import React from 'react';
import { connect } from 'react-redux';
import { getTileById } from '../../redux/selectors/board.selectors';
import { AppState } from '../../redux/reducers';
import { clickTile } from '../../redux/actions/board.actions';
import Tile from './Tile';
import { Props, State } from './Tile.interfaces';

const mapState = (state: AppState, ownProps: Props): Props => {
  const tile = getTileById(state, ownProps.index);

  return {
    id: tile.id,
    index: ownProps.index,
    isSelected: tile.isSelected,
    isDiscovered: tile.isDiscovered,
    imgUrl: tile.imgUrl,
  };
};
const mapDispatchToProps = (dispatch: Function, ownProps: Props): State => ({
  onClick: () => dispatch(clickTile(ownProps.index))
});

export default connect(
  mapState,
  mapDispatchToProps
)(React.memo(Tile));
