import React from 'react';
import { connect } from 'react-redux';
import { iniGame } from '../redux/actions';
import { AppState } from '../redux/reducers';
import { getScore } from '../redux/selectors/board.selectors';
import { Modal } from '../components/Modal';
import { Button } from '../components/Button';

const mapState = (state: AppState): any => ({
  score: getScore(state),
});

const mapDispatchToProps = (dispatch: Function): any => ({
  onBtnClick: () => dispatch(iniGame()),
});

const ModalEndGame = ({ score, onBtnClick }: any) => (
  <Modal name='finalScore'>
    <h3>GAME OVER</h3>
    <span>Score {score}</span>
    <Button label='New Game!' onClick={onBtnClick}/>
  </Modal>
);

export default connect(
  mapState,
  mapDispatchToProps,
)(React.memo(ModalEndGame));

