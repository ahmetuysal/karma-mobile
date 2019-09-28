import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IndividualLeaderboardPage } from './individual-leaderboard.page';

const routes: Routes = [
  {
    path: '',
    component: IndividualLeaderboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IndividualLeaderboardPage]
})
export class IndividualLeaderboardPageModule {}
