import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './services/api.service';

import { AppComponent } from './components/app/app.component';

import { DashboardModule } from './modules/dashboard/dashboard.module';
import { GamesModule } from './modules/games/games.module';
import { ProfileModule } from './modules/profile/profile.module';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { 
    path: 'dashboard', 
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
  },
  { 
    path: 'games', 
    loadChildren: './modules/games/games.module#GamesModule'
  },
  { 
    path: 'your-profile',
    loadChildren: './modules/profile/profile.module#ProfileModule'
  },
  { 
    path: '**', 
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    DashboardModule,
    GamesModule,
    ProfileModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
