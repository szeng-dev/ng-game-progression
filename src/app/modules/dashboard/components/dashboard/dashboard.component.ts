import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

import { Game } from '../../types/game.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  numberOfFinishedGames: number = 0;
  games: Game[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.apiService.getGames()
      .subscribe(data => this.games = data);
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
