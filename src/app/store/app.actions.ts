import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Language } from '../types/language.model';
import { Profile } from '../types/profile.model';

export const LOAD_PROFILE = '[PROFILE] Load Profile';
export const LOAD_PROFILE_SUCCESS = '[PROFILE] Load Profile Success';
export const LOAD_PROFILE_FAIL = '[PROFILE] Load Profile Fail';

export const LOAD_LANGUAGES = '[LANGUAGE] Load Languages';
export const LOAD_LANGUAGES_SUCCESS = '[LANGUAGE] Load Languages Success';
export const LOAD_LANGUAGES_FAIL = '[LANGUAGE] Load Languages Fail';

export class LoadProfile implements Action {
  readonly type = LOAD_PROFILE;
}

export class LoadProfileSuccess implements Action {
  readonly type = LOAD_PROFILE_SUCCESS;

  constructor(public payload: Profile) {}
}

export class LoadProfileFail implements Action {
  readonly type = LOAD_PROFILE_FAIL;

  constructor(public payload: any) {}
}

export class LoadLanguages implements Action {
  readonly type = LOAD_LANGUAGES;
}

export class LoadLanguagesSuccess implements Action {
  readonly type = LOAD_LANGUAGES_SUCCESS;

  constructor(public payload: Language[]) {}
}

export class LoadLanguagesFail implements Action {
  readonly type = LOAD_LANGUAGES_FAIL;

  constructor(public payload: any) {}
}

export type Actions = 
 | LoadProfile
 | LoadProfileSuccess 
 | LoadProfileFail
 | LoadLanguages
 | LoadLanguagesSuccess
 | LoadLanguagesFail;