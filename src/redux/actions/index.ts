import { fetchProfiles } from './profiles.actions';
import { gameIniTimer, gameResume, gamePause } from './game.actions';
import { modalOpen, modalClose } from './modals.actions';
import {
  boardReset,
  boardSetTiles,
  boardSelectTile,
  boardAddDiscovered,
  boardClearSelections,
} from './board.actions';
import { Dispatch } from '../common';
import { AppState } from '../reducers';
import { getTileById, getBoardSelections, getBoardDiscoveries } from '../selectors/board.selectors';
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

export const iniGame = () => (
  dispatch: Dispatch,
) => {
  dispatch(modalClose('finalScore'));
  dispatch(iniBoard());
  dispatch(gameIniTimer());
  dispatch(gameResume());
};

export const endGame = () => (
  dispatch: Dispatch,
) => {
  console.log('Game Overrrrr');
  dispatch(gamePause());
  dispatch(modalOpen('finalScore'));
};

export const iniApp = () => (
  dispatch: Dispatch,
) => {
  dispatch(fetchProfiles())
    .then(() => dispatch(iniGame()))
    .catch((error: Error) => console.log(error));
};


export const clickTile = (titleId: number) => (
  dispatch: Dispatch,
  getState: () => AppState
) => {
  const state = getState();
  const selections = getBoardSelections(state);
  const selectionsCount = selections.filter((sel) => sel != null).length;

  if (selectionsCount === 0) {
    dispatch(boardSelectTile(titleId));
  } else if (selectionsCount === 1) {
    const selection1 = getTileById(state, selections[0]);
    const selection2 = getTileById(state, titleId);

    if (selection1.id === selection2.id) {
      dispatch(boardAddDiscovered(selection1.id));

      if(getBoardDiscoveries(state).length === 5) {
        dispatch(endGame());
      };
    };

    dispatch(boardSelectTile(titleId));

    // Flip automaticall tiles after 1 sec
    setTimeout(() => dispatch(boardClearSelections()), 1000);
  };
};
