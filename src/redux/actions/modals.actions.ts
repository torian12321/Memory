import { Action} from '../common';
import * as ACTIONS from './actions.types';

export const modalRegister = (modalName: string): Action => ({
  type: ACTIONS.MODAL_REGISTER,
  payload: {
    modalName,
  },
});

export const modalToggle = (modalName: string, open: boolean): Action => ({
  type: ACTIONS.MODAL_TOGGLE,
  payload: {
    modalName,
    open,
  },
});
export const modalOpen = (modalName: string): Action =>
  modalToggle(modalName, true)
export const modalClose = (modalName: string): Action =>
  modalToggle(modalName, false)
