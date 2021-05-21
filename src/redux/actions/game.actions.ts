import { Action} from '../common';
import * as ACTIONS from './actions.types';

export const gameIniTimer = (): Action => ({
  type: ACTIONS.GAME_INICIATE_TIMER,
});
export const gameAddVictory = (): Action => ({
  type: ACTIONS.GAME_ADD_VICTORY,
});
