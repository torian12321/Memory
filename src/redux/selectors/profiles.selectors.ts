import { createSelector } from 'reselect';
import { AppState } from '../reducers';
import { State as StateProfiles } from '../reducers/profiles.reducers';

const getProfilesState = (state: AppState): any =>
// const getProfilesState = (state: AppState): StateProfiles =>
  state.profiles || state || {};

export const getProfileIds = createSelector(
  getProfilesState,
  (profiles: StateProfiles): string[] =>
  profiles.allIds || []
);
