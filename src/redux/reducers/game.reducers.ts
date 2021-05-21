import * as ACTIONS from '../actions/actions.types';
import { Action } from '.';

export interface State {
  iniTime: Date,
  victories: number
};

const initialState: State = {
  iniTime: new Date(),
  victories: 0,
};

const reducer = (state = initialState, action: State & Action) => {
  switch (action.type) {
    case ACTIONS.GAME_INICIATE_TIMER:
      return {
        ...state,
        iniTime: new Date(),
      };

    case ACTIONS.GAME_ADD_VICTORY:
      return {
        ...state,
        victories: state.victories + 1,
      };
    default:
      return state;
  };
};

export default reducer;
