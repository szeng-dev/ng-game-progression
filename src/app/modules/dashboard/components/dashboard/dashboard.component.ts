import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

import { Game } from '../../types/game.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  games: Game[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getGames()
      .subscribe(
        games => this.games = games
      );
  }

  getNumberOfFinishedGames():number {
    return this.games.reduce((acc, curr) => {
      return curr.isComplete ? acc + 1 : acc;
    }, 0);
  }

  getNumberOfUnfinishedGames():number {
    return this.games.length - this.getNumberOfFinishedGames();
  }

  getNumberofDaysLeft():number {
    const numberOfHoursLeft = this.games.reduce(
      (acc, curr) => {
        return acc + curr.numberOfHoursToComplete;
      }, 0);
    return Math.floor(numberOfHoursLeft / 24);
  }
}
