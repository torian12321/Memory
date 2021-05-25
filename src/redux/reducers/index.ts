import { combineReducers } from 'redux';
import game, { State as StateGame } from './game.reducers';
import profiles, { State as StateProfiles } from './profiles.reducers';
import board, { State as StateBoard } from './board.reducers';
import modals, { State as StateModals } from './modals.reducers';

export interface AppState {
  game: StateGame,
  profiles: StateProfiles,
  board: StateBoard,
  modals: StateModals,
}

const rootReducer = combineReducers({
  game,
  profiles,
  board,
  modals,
});


export default rootReducer;
