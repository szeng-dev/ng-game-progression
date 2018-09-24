import { Language } from '../../types/language.model';
import { Profile } from '../../types/profile.model';

export interface IAppState {
  profile: IProfileState
}
export interface IProfileState {
  profile: Profile,
  loaded: boolean,
  loading: boolean
}
export interface ILanguagesState {
  languages: Language[],
  loaded: boolean,
  loading: boolean
}