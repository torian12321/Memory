import React from 'react';
import { connect } from 'react-redux';
import { getBoardTiles } from '../../redux/selectors/board.selectors';
import { AppState } from '../../redux/reducers';
// import { boardSelectedAreaUnset } from '../../redux/actions/board.actions';
import Board from './Board';
import { Props, State } from './Board.interfaces';

const mapState = (state: AppState): Props => ({
  tiles: getBoardTiles(state),
});

const mapDispatchToProps = (dispatch: Function): State => ({
  // onMouseLeave: () => dispatch(boardSelectedAreaUnset()),
});

export default connect(
  mapState,
  mapDispatchToProps,
)(React.memo(Board));
