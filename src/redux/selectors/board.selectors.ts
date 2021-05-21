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


export const getTileById = (state: AppState, id: number): any => {
  const tiles = getBoardTiles(state);
  const tile = tiles[id];

  const profile = getProfileById(state, tile);
  console.log('------------');
  console.log(profile);

  return {
    ...profile,
  }
}

// export const getTileById = createSelector(
//   getBoard,
//   (board: StateBoard): string =>
//   board.tiles || []
// );
