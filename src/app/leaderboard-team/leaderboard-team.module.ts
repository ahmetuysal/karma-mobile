import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LeaderboardTeamPage } from './leaderboard-team.page';

const routes: Routes = [
  {
    path: '',
    component: LeaderboardTeamPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LeaderboardTeamPage]
})
export class LeaderboardTeamPageModule {}
