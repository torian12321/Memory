import { Action, Dispatch} from '../common';
import { AppState } from '../reducers';
import * as ACTIONS from './actions.types';
import { getTileById, getBoardSelections } from '../selectors/board.selectors';

export const boardReset = () => ({
  type: ACTIONS.BOARD_RESET,
});
export const boardClearSelections = () => ({
  type: ACTIONS.BOARD_CLEAR_SELECTIONS,
});

export const boardSetTiles = (tileIds: string[]): Action => ({
  type: ACTIONS.BOARD_SET_TILES,
  payload: {
    tileIds,
  },
});

export const boardAddDiscovered = (profileId: number): Action => ({
  type: ACTIONS.BOARD_ADD_DISCOVERED,
  payload: {
    profileId,
  },
});


export const boardSelectTile = (tileId: number): Action => ({
  type: ACTIONS.BOARD_SELECT_TILE,
  payload: {
    tileId,
  },
});

export const clickTile = (titleId: number) => (
  dispatch: Dispatch,
  getState: () => AppState
) => {
  const state = getState();
  const selections = getBoardSelections(state);
  const selectionsCount = selections.filter((sel) => sel !== null);

  if (selectionsCount.length === 0) {
    dispatch(boardSelectTile(titleId));
  } else if (selectionsCount.length === 1) {
    const selection1 = getTileById(state, selectionsCount[0]);
    const selection2 = getTileById(state, titleId);

    if (selection1.id === selection2.id) {
      dispatch(boardAddDiscovered(selection1.id));
    };

    dispatch(boardSelectTile(titleId));

    setTimeout(() => dispatch(boardClearSelections()), 1000);
  };
};
