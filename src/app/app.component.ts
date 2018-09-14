import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  user: any;
  pages: string[];

  constructor() {
    this.title = "Game Progression";
    this.user = {
      name: "Stephanie Zeng",
      profileImage: "https://via.placeholder.com/50x50"
    };
    this.pages = ['Dashboard', 'Games'];
  }
}