import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  user: any;
  languages: any;
  langCode: string = 'en'

  constructor(private http: Http) {
    this.title = "Game Progression";
    this.user = this.http.get('http://localhost:3004/profile')
      .subscribe(
        res => this.user = res.json()
      );
    this.languages = this.http.get('http://localhost:3004/languages')
      .subscribe(
        res => this.languages = res.json()
      );
  }
}