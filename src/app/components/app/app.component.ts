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
  profile: Observable<Profile>;
  profileName: string;
  profileImage: string;
  languages: Language[];
  langCode: string = 'en'

  constructor(private apiService: ApiService) {
    this.title = "Game Progression";
  }

  ngOnInit() {
    this.getProfile();
    this.getLanguages();
  }

  getProfile() {
    this.apiService.getProfile()
      .subscribe(
        data => {
          this.profileName = `${data.firstName} ${data.lastName}`;
          this.profileImage = data.image;
        }
    );
  }

  getLanguages() {
    this.apiService.getLanguages()
      .subscribe(
        data => this.languages = data
      );
  }
}