import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GamesComponent } from './games/games.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { ApiService } from './services/api.service';

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'games', component: GamesComponent },
  { path: 'your-profile', component: UserProfileComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GamesComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      APP_ROUTES,
      // { enableTracing: true}
    )
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
