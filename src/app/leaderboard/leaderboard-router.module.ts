import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderboardPage } from './leaderboard.page';

const routes: Routes = [
  {
    path: '',
    component: LeaderboardPage,
    children: [
      {
        path: 'individual',
        children: [
          {
        
            path: '',
            loadChildren: () =>
              import(
                '../individual-leaderboard/individual-leaderboard.module'
              ).then(m => m.IndividualLeaderboardPageModule)
          }
        ]
      },
      {
        path: 'team',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../leaderboard-team/leaderboard-team.module').then(
                m => m.LeaderboardTeamPageModule
              )
          }
        ]
      },
      {
        path: '',
        redirectTo: 'individual',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'individual',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaderboardRoutingModule {}
