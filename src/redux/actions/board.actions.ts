import { Action } from '../common';
import * as ACTIONS from './actions.types';

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

// export const boardSelectTile = (tileId: string): Action => ({
//   type: ACTIONS.BOARD_SELECT_TILE,
//   payload: {
//     tileId,
//   },
// });

export const boardSelectTile = (tileId: number): Action => ({
  type: ACTIONS.BOARD_SELECT_TILE,
  payload: {
    tileId,
  },
});