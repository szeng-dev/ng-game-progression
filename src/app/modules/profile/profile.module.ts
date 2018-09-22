import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './components/profile/profile.component';

const PROFILE_ROUTES: Routes = [
  { 
    path: 'your-profile',
    component: ProfileComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PROFILE_ROUTES),
  ],
  declarations: [
    ProfileComponent
  ]
})
export class ProfileModule { }