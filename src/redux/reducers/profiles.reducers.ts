import * as ACTIONS from '../actions/actions.types';
import { Action } from '../common';

export interface Profile {
  id: string,
  name: string,
  url: string,
  imgUrl: string,
}

export interface State {
  allIds: string[],
  byIds: {
    [key: string]: Profile,
  },
};

const initialState: State = {
  allIds: [],
  byIds: {},
};

const reducer = (state = initialState, action: State & Action) => {
  switch (action.type) {
    case ACTIONS.PROFILES_ADD:
      const { profiles = []}: any = action.payload;
      const newProfiles: any = {};

      profiles.forEach((profile: any) => {
        newProfiles[profile.id] = {
          ...profile,
        };
      });

      return {
        ...state,
        allIds: [
          ...state.allIds,
          ...profiles.map((profile: any)=> profile.id)
        ],
        byIds: {
          ...state.byIds,
          ...newProfiles
        },
      };
    case ACTIONS.PROFILES_RESET:
      return initialState;
    default:
      return state;
  };
};

export default reducer;
