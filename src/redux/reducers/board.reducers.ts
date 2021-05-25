import * as ACTIONS from '../actions/actions.types';
import { Action } from '../common';

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

    case ACTIONS.BOARD_SELECT_TILE:
        const { tileId = '' }: any = action.payload;
        const { tileSelected1, tileSelected2 } = state;

        if(tileSelected1 === undefined) {
          return {
            ...state,
            tileSelected1: tileId,
          };
        } else if (
            tileSelected2 === undefined &&
            tileSelected1 !== tileId // Same tile cant be selected twice
          ) {
          return {
            ...state,
            tileSelected2: tileId,
          };
        }
        return state;
        

    case ACTIONS.BOARD_ADD_DISCOVERED:
      const { profileId = '' }: any = action.payload;

      return {
        ...state,
        profilesDiscovered: [
          ...state.profilesDiscovered,
          profileId,
        ],
      };

    case ACTIONS.BOARD_CLEAR_SELECTIONS:
        return {
          ...state,
          tileSelected1: undefined,
          tileSelected2: undefined,
        };
    case ACTIONS.BOARD_RESET:
      return initialState;
    default:
      return state;
  };
};

export default reducer;
