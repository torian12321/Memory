import { Action} from '../common';
import * as ACTIONS from './actions.types';

export const gameIniTimer = (): Action => ({
  type: ACTIONS.GAME_INICIATE_TIMER,
});

export const gameResume = (): Action => ({
  type: ACTIONS.GAME_RESUME,
});
export const gamePause = (): Action => ({
  type: ACTIONS.GAME_PAUSE,
});

export const gameAddVictory = (): Action => ({
  type: ACTIONS.GAME_ADD_VICTORY,
});
