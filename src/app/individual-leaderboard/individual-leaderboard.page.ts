import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-individual-leaderboard',
  templateUrl: './individual-leaderboard.page.html',
  styleUrls: ['./individual-leaderboard.page.scss']
})
export class IndividualLeaderboardPage implements OnInit {
  goldRest: { name: string; exp: number }[];

  constructor() {}

  ngOnInit() {
    this.goldRest = [
      {
        name: 'Ahmet Uysal',
        exp: 12312
      },
      {
        name: 'Ahmet Uysal',
        exp: 12312
      },
      {
        name: 'Ahmet Uysal',
        exp: 12312
      },
      {
        name: 'Ahmet Uysal',
        exp: 12312
      },
      {
        name: 'Ahmet Uysal',
        exp: 12312
      },
      {
        name: 'Ahmet Uysal',
        exp: 12312
      },
      {
        name: 'Ahmet Uysal',
        exp: 12312
      },
      {
        name: 'Ahmet Uysal',
        exp: 12312
      },
      {
        name: 'Ahmet Uysal',
        exp: 12312
      },
      {
        name: 'Ahmet Uysal',
        exp: 12312
      },
      {
        name: 'Ahmet Uysal',
        exp: 12312
      },
      {
        name: 'Ahmet Uysal',
        exp: 12312
      },
      {
        name: 'Ahmet Uysal',
        exp: 12312
      },
      {
        name: 'Ahmet Uysal',
        exp: 12312
      },
      {
        name: 'Ahmet Uysal',
        exp: 12312
      },
      {
        name: 'Ahmet Uysal',
        exp: 12312
      }
    ];
  }
}
