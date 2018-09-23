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
  totalNumberOfGames: number = 0;
  numberOfFinishedGames: number = 0;
  numberOfUnfinishedGames: number = 0;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getGames()
      .subscribe(games => {
        this.games = games;
        this.totalNumberOfGames = games.length;
        this.numberOfFinishedGames = this.getNumberOfFinishedGames(this.games);
        this.numberOfUnfinishedGames = this.totalNumberOfGames - this.numberOfFinishedGames;
      });
  }

  getNumberOfFinishedGames(games: Game[]): number {
    return games.reduce((acc, curr) => {
      return curr.isComplete ? acc + 1 : acc;
    }, 0);
  }

  getNumberofDaysLeft(games: Game[]): number {
    const numberOfHoursLeft = games.reduce(
      (acc, curr) => {
        return acc + curr.numberOfHoursToComplete;
      }, 0);
    return parseFloat((numberOfHoursLeft / 24).toFixed(1));
  }

  getProgressPercentage(complete: number, total: number): string {
    return Math.floor(complete / total * 100) + '%';
  }
}
