import * as ACTIONS from '../actions/actions.types';
import { Action } from '../common';

export interface Modal {
  name: string,
  isOpen: boolean,
  visited: boolean,
}

export interface State {
  [key: string]: Modal,
};

const initialState: State = {};
const initialStateModal: Modal = {
  name: '',
  isOpen: false,
  visited: false,
};

const reducer = (state = initialState, action: State & Action) => {
  const { modalName }: any = action.payload;

  switch (action.type) {
    case ACTIONS.MODAL_REGISTER:

      return {
        ...state,
        [modalName]: {
          ...initialStateModal,
          name: modalName,
        }
      };
    case ACTIONS.MODAL_TOGGLE:
      const { open = false }: any = action.payload;
      const modal = state[modalName] || {};
      
      return {
        ...state,
        [modalName]: {
          ...modal,
          isOpen: open,
        }
      };
    case ACTIONS.PROFILES_RESET:
      return initialState;
    default:
      return state;
  };
};

export default reducer;
