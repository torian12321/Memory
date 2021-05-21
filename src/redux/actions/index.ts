import { fetchProfiles } from './profiles.actions';
import { boardReset, boardSetTiles } from './board.actions';
import { Action, Dispatch } from '../common';
import { AppState } from '../reducers';
import { getProfileIds } from '../selectors/profiles.selectors';

const suffleArray = (arr: any[] = []): any[] =>
  // https://flaviocopes.com/how-to-shuffle-array-javascript/
  arr.sort(() => Math.random() - 0.5);

export const iniBoard = () => (
  dispatch: Dispatch,
  getState: () => AppState
): any => {
  const state= getState();
  const ids = getProfileIds(state);

  // Clear previous board
  dispatch(boardReset());

  // randomly get 6 profiles
  const selectedIds = suffleArray(ids).slice(0, 6);

  // Duplicate each id, and set the board after suffle
  dispatch(boardSetTiles(suffleArray(selectedIds.concat(selectedIds))));
};

export const iniApp = () => (
  dispatch: Dispatch,
  // getState: () => AppState
) => {
  dispatch(fetchProfiles())
    .then(() => dispatch(iniBoard()))
    .catch((error: Error) => console.log(error));
};
