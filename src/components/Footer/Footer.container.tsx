import React from 'react';
import { connect } from 'react-redux';
import { getBoardDiscoveries } from '../../redux/selectors/board.selectors';
import { AppState } from '../../redux/reducers';
import Footer from './Footer';
import { Props } from './Footer.interfaces';

const mapState = (state: AppState): Props => {
  const discoveries = getBoardDiscoveries(state);
  return {
  // tiles: getBoardTiles(state),
  score: discoveries.length * 100,
  }
};

export default connect(
  mapState,
  {},
)(React.memo(Footer));
