import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Profile } from '../types/profile.model';
import { Language } from '../types/language.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url: string = 'http://localhost:3004';

  constructor(private http: HttpClient) { }

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(`${this.base_url}/profile`);
  }

  getLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(`${this.base_url}/languages`);
  }
}
