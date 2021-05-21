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

export const getBoardDiscoveries = createSelector(
  getBoard,
  (board: StateBoard): any[] =>
  board.profilesDiscovered || []
);

export const getTileById = (state: AppState, id: number): any=> {
  const tiles = getBoardTiles(state);
  const profile = getProfileById(state, tiles[id]);
  const selections = getBoardSelections(state);
  const discoveries = getBoardDiscoveries(state);

  return {
    ...profile,
    isSelected: selections.includes(id),
    isDiscovered: discoveries.includes(profile.id)
  }
};
