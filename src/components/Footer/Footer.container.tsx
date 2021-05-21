import React from 'react';
import { connect } from 'react-redux';
import { getBoardDiscoveries } from '../../redux/selectors/board.selectors';
import { endGame } from '../../redux/actions';
import { AppState } from '../../redux/reducers';
import Footer from './Footer';
import { Props, State } from './Footer.interfaces';

const mapState = (state: AppState): Props => ({
  iniTime: state.game.iniTime,
  score: getBoardDiscoveries(state).length * 100,
});

const mapDispatchToProps = (dispatch: Function): State => ({
  onTimeEnds: () => dispatch(endGame),
});

export default connect(
  mapState,
  mapDispatchToProps,
)(React.memo(Footer));
