import React from 'react';
import { connect } from 'react-redux';
import { iniApp } from '../redux/actions';
// import axios from 'axios';
// import { getFlippedTiles } from '../redux/selectors/board.selectors';
import { AppState } from '../redux/reducers';
import App from './App';
import { Props, State } from './App.interfaces';

const mapState = (state: AppState): Props => ({
  tiles: 'jjjjjjj',
});
const mapDispatchToProps = (dispatch: Function): State => ({
  onLoad: () => dispatch(iniApp()),
});

export default connect(
  mapState,
  mapDispatchToProps,
)(React.memo(App));
