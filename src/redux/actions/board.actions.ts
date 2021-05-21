import { Action } from '../common';
import * as ACTIONS from './actions.types';

export const boardReset = () => ({
  type: ACTIONS.BOARD_RESET,
});

export const boardSetTiles = (tileIds: string[]): Action => ({
  type: ACTIONS.BOARD_SET_TILES,
  payload: {
    tileIds,
  },
});
