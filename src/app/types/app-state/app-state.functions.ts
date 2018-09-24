import { ActionReducerMap, createSelector } from '@ngrx/store';
import { profileReducer } from "../../store/app.reducers";
import { IAppState, IProfileState } from './app-state.interface';

export const reducers: ActionReducerMap<IAppState> = {
  profile: profileReducer
}

export const selectProfile = (state: IAppState) => state.profile;
export const getProfile = createSelector(
  selectProfile,
  (state: IProfileState) => state.profile
);
export const getProfileLoaded = createSelector(
  selectProfile,
  (state: IProfileState) => state.loaded
);
export const getProfileLoading = createSelector(
  selectProfile,
  (state: IProfileState) => state.loading
);


