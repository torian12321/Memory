import { combineReducers } from 'redux';
import profiles, { State as StateProfiles } from './profiles.reducers';
import board, { State as StateBoard } from './board.reducers';

export interface AppState {
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
  profiles,
  board,
  // common,
  // board,
});


export default rootReducer;
