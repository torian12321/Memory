import { combineReducers } from 'redux';
import game, { State as StateGame } from './game.reducers';
import profiles, { State as StateProfiles } from './profiles.reducers';
import board, { State as StateBoard } from './board.reducers';

export interface AppState {
  game: StateGame,
  profiles: StateProfiles,
  board: StateBoard,
}

export interface Action {
  type: string,
  payload?: {
    [key: string]: any,
  },
}

const rootReducer = combineReducers({
  game,
  profiles,
  board,
});


export default rootReducer;
