import React from 'react';
import { connect } from 'react-redux';
import { getBoardTiles } from '../../redux/selectors/board.selectors';
import { AppState } from '../../redux/reducers';
import Board from './Board';
import { Props } from './Board.interfaces';

const mapState = (state: AppState): Props => ({
  tiles: getBoardTiles(state),
});

export default connect(
  mapState,
  {},
)(React.memo(Board));
