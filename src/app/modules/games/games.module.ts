import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GamesComponent } from './components/games/games.component';

const GAMES_ROUTES: Routes = [
  { 
    path: '',
    component: GamesComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(GAMES_ROUTES),
  ],
  declarations: [
    GamesComponent
  ]
})
export class GamesModule { }