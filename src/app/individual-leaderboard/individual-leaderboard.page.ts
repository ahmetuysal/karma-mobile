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
        name: 'Yekta Kocaoğullar',
        exp: 12000
      },
      {
        name: 'Mısra Taşçı',
        exp: 11050
      },
      {
        name: 'Gül Sena Altıntaş',
        exp: 9403
      },
      {
        name: 'İrem Tarkın',
        exp: 8700
      },
      {
        name: 'Ceren Kocaoğullar',
        exp: 8607
      },
      {
        name: 'Ekin Berk Polat',
        exp: 8003
      },
      {
        name: 'Ahmet Uysal',
        exp: 7065
      },
      {
        name: 'Yekta Kocaoğullar',
        exp: 7000
      },
      {
        name: 'Mısra Taşçı',
        exp: 6665
      },
      {
        name: 'Gül Sena Altıntaş',
        exp: 6504
      },
      {
        name: 'İrem Tarkın',
        exp: 6230
      },
      {
        name: 'Ceren Kocaoğullar',
        exp: 5004
      },
      {
        name: 'Ekin Berk Polat',
        exp: 4300
      }
    ];
  }
}
