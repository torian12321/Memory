import axios from 'axios';
import { Action, Dispatch } from '../common';
import * as ACTIONS from './actions.types';

export const profilesReset = () => ({
  type: ACTIONS.PROFILES_RESET,
});

export const profilesAdd = (profiles: any[]): Action => ({
  type: ACTIONS.PROFILES_ADD,
  payload: {
    profiles,
  },
});


export const fetchProfiles = () => (
  dispatch: Dispatch,
  // getState: () => AppState
): Promise<any> => {
  return axios
    .get('https://api.github.com/repos/facebook/react/contributors')
    .then((response: any) => {
      const { data = [] } = response;

      dispatch(profilesAdd(data.map((profile: any = {}) => ({
        id: profile.id,
        name: profile.login,
        url: profile.url,
        imgUrl: profile.avatar_url,
      }))));
    })
    .catch((error: Error) => console.log(error));
};
