import { createSelector } from 'reselect';
import { AppState } from '../reducers';
import { getProfileById } from '../selectors/profiles.selectors';
import { State as StateBoard } from '../reducers/board.reducers';

const getBoard = (state: AppState): any =>
  state.board || state || {};

export const getBoardTiles = createSelector(
  getBoard,
  (board: StateBoard): string[] =>
  board.tiles || []
);

export const getBoardSelections = createSelector(
  getBoard,
  (board: StateBoard): any[] =>
  [board.tileSelected1, board.tileSelected2]
);


export const getTileById = (state: AppState, id: number): any => {
  const tiles = getBoardTiles(state);
  const selections = getBoardSelections(state);

  return {
    ...getProfileById(state, tiles[id]),
    isSelected: selections.includes(id),
  }
}

// export const getTileById = createSelector(
//   getBoard,
//   (board: StateBoard): string =>
//   board.tiles || []
// );
