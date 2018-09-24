import { Language } from '../../types/language.model';
import { Profile } from '../../types/profile.model';

export interface IAppState {
  profile: Profile,
  languages: Language[]
}