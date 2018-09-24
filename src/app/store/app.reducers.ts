import { Action } from '@ngrx/store';
import * as AppActions from './app.actions';
import { IProfileState } from '../types/app-state/app-state.interface';

const initialState: IProfileState = {
  profile: {
    firstName: '',
    lastName: '',
    image: ''
  },
  loaded: false,
  loading: false
};

export const profileReducer = (
  state: IProfileState = initialState,
  action: AppActions.Actions
): IProfileState => {
  switch (action.type) {
    case AppActions.LOAD_PROFILE:
      return {
        ...state,
        loading: true
      };
    case AppActions.LOAD_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true
      };
    case AppActions.LOAD_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false
      };
    default:
      return state;
  }
};