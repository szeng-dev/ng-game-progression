import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Game } from '../types/game.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url: string = 'http://localhost:3004';

  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.base_url}/games`);
  }
}
