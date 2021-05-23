import * as ACTIONS from '../actions/actions.types';
import { Action } from '.';

export interface State {
  iniTime: Date,
  victories: number,
  paused: boolean,
};

const initialState: State = {
  iniTime: new Date(),
  victories: 0,
  paused: false,
};

const reducer = (state = initialState, action: State & Action) => {
  switch (action.type) {
    case ACTIONS.GAME_INICIATE_TIMER:
      return {
        ...state,
        iniTime: new Date(),
      };

    case ACTIONS.GAME_RESUME:
      return {
          ...state,
          paused: false,
      };
    case ACTIONS.GAME_PAUSE:
      return {
        ...state,
        paused: true,
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
