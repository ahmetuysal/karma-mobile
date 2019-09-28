import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LeaderboardPage } from './leaderboard.page';
import { LeaderboardRoutingModule } from './leaderboard-router.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, LeaderboardRoutingModule],
  declarations: [LeaderboardPage]
})
export class LeaderboardPageModule {}
