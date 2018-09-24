import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Language } from '../types/language.model';
import { Profile } from '../types/profile.model';

export const GET_PROFILE = '[PROFILE] Get';
export const GET_LANGUAGES = '[LANGUAGE] Get';

export class GetProfile implements Action {
  readonly type = GET_PROFILE;

  constructor(public payload: Profile) {}
}

export class GetLanguages implements Action {
  readonly type = GET_LANGUAGES;

  constructor(public payload: Language) {}
}

export type Actions = GetProfile | GetLanguages;