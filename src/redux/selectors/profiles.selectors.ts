import { createSelector } from 'reselect';
import { AppState } from '../reducers';
import { State as StateProfiles, Profile } from '../reducers/profiles.reducers';

const getProfilesState = (state: AppState): StateProfiles =>
  state.profiles || state || {};

export const getProfileIds = createSelector(
  getProfilesState,
  (profiles: StateProfiles): string[] =>
  profiles.allIds || []
);

const getById = createSelector(
  getProfilesState,
  (profiles: StateProfiles): {[key: string]: Profile} =>
  profiles.byIds || {}
);

export const getProfileById = (state: AppState, id: string): Profile =>
  getById(state)[id];
