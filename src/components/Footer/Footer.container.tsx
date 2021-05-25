import React from 'react';
import { connect } from 'react-redux';
import { getGame } from '../../redux/selectors/game.selectors';
import { getScore } from '../../redux/selectors/board.selectors';
import { endGame } from '../../redux/actions';
import { AppState } from '../../redux/reducers';
import Footer from './Footer';
import { Props, State } from './Footer.interfaces';

const mapState = (state: AppState): Props => {
  const { iniTime, paused } = getGame(state);
  return {
    iniTime,
    gamePaused: paused,
    score: getScore(state),
  }
};

const mapDispatchToProps = (dispatch: Function): State => ({
  onTimeEnds: () => dispatch(endGame()),
});

export default connect(
  mapState,
  mapDispatchToProps,
)(React.memo(Footer));
