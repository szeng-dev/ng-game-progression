import { Action } from '@ngrx/store';
import * as AppActions from './app.actions';
import { IAppState } from '../types/app-state/app-state.interface';

const initialState: IAppState = {
  profile: {
    firstName: '',
    lastName: '',
    image: ''
  },
  languages: [],
};

export const reducer = (
  state: IAppState[] = [initialState],
  action: AppActions.Actions
) => {
  switch (action.type) {
    case AppActions.GET_PROFILE:
      return [...state, action.payload];
    case AppActions.GET_LANGUAGES:
      return [...state, action.payload];
    default:
      return state;
  }
};