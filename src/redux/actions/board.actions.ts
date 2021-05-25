import { Action } from '../common';
import * as ACTIONS from './actions.types';

export const boardReset = (): Action => ({
  type: ACTIONS.BOARD_RESET,
});
export const boardClearSelections = (): Action => ({
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
