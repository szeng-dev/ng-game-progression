import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from '../../types/app-state/app-state.interface';
import { getProfile } from '../../types/app-state/app-state.functions';

import { ApiService } from '../../services/api.service';
import { Profile } from '../../types/profile.model';
import { Language } from '../../types/language.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title: string = "Game Progression";
  profile$: Observable<Profile>;
  languages$: Observable<Language[]>;
  langCode: string = 'en'

  constructor(
    private apiService: ApiService,
    private store: Store<IAppState>
  ) { }

  ngOnInit() {
    // this.profile$ = this.apiService.getProfile();
    this.languages$ = this.apiService.getLanguages();
    this.store.select(getProfile).subscribe(state => {
      console.log(state);
    });
  }
}