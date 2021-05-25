import { AppState } from '../reducers';
import { State as StateModals, Modal } from '../reducers/modals.reducers';

const getModals = (state: AppState): StateModals =>
  state.modals || state || {};

export const getModalByName = (state: AppState, name: string): Modal => 
  getModals(state)[name] || {}

export const getModalIsOpen = (state: AppState, name: string): boolean => 
  !!getModalByName(state, name).isOpen
