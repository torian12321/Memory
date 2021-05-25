import { AppState } from '../reducers';
import { State as StateGame } from '../reducers/game.reducers';

export const getGame = (state: AppState): StateGame =>
  state.game || state || {};
