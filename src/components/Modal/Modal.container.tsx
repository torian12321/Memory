import React from 'react';
import { connect } from 'react-redux';
import { getModalIsOpen } from '../../redux/selectors/modals.selectors';
import { modalRegister } from '../../redux/actions/modals.actions';
import { AppState } from '../../redux/reducers';
import Modal from './Modal';
import { Props, State } from './Modal.interfaces';

const mapState = (state: AppState, ownprops: Props): Props => ({
  name: ownprops.name,
  isOpen: getModalIsOpen(state, ownprops.name),
});
const mapDispatchToProps = (dispatch: Function, ownprops: Props): State => ({
  onIni: () => dispatch(modalRegister(ownprops.name)),
  close: () => dispatch(() => {}),
});

export default connect(
  mapState,
  mapDispatchToProps,
)(React.memo(Modal));
