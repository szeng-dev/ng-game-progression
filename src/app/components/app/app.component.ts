import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';

import { Profile } from '../../types/profile.model';
import { Language } from '../../types/language.model';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;
  profile$: Observable<Profile>;
  languages$: Observable<Language[]>;
  langCode: string = 'en'

  constructor(private apiService: ApiService) {
    this.title = "Game Progression";
  }

  ngOnInit() {
    this.profile$ = this.apiService.getProfile();
    this.languages$ = this.apiService.getLanguages();
  }
}