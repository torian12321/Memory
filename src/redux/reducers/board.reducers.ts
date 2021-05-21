import * as ACTIONS from '../actions/actions.types';
import { Action } from '.';

export interface State {
  tiles: string[],
  tileSelected1?: string,
  tileSelected2?: string,
  profilesDiscovered: string[],
}

const initialState: State = {
  tiles: [],
  tileSelected1: undefined,
  tileSelected2: undefined,
  profilesDiscovered: [],
};

const reducer = (state = initialState, action: State & Action) => {
  switch (action.type) {
    case ACTIONS.BOARD_SET_TILES:
      const { tileIds = []}: any = action.payload;
      return {
        ...state,
        tiles: tileIds,
      };
    case ACTIONS.BOARD_RESET:
      return initialState;
    default:
      return state;
  };
};

export default reducer;
