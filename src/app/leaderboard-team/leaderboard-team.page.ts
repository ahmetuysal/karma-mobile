import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard-team',
  templateUrl: './leaderboard-team.page.html',
  styleUrls: ['./leaderboard-team.page.scss']
})
export class LeaderboardTeamPage implements OnInit {
  goldRest: { name: string; exp: number }[];
  constructor() {}

  ngOnInit() {
    this.goldRest = [
      {
        name: 'Su Samurları',
        exp: 12312
      },
      {
        name: 'Jimnastikçiler',
        exp: 12000
      },
      {
        name: 'Simit',
        exp: 11050
      },
      {
        name: 'Gül Sena ve Arkadaşları',
        exp: 9403
      },
      {
        name: 'Ekip #1',
        exp: 8700
      },
      {
        name: 'Şampiyonlar',
        exp: 8607
      },
      {
        name: 'Koş Takım Koş',
        exp: 8003
      },
      {
        name: 'Tayfa Maraton',
        exp: 7065
      },
      {
        name: 'Oyuncular',
        exp: 7000
      },
      {
        name: 'Kazanacak Takım',
        exp: 6665
      },
      {
        name: 'Kovalayıcılar',
        exp: 6504
      },
      {
        name: 'Kim Bilir Kimler',
        exp: 6230
      },
      {
        name: 'Oyunlaştırma Ekibi',
        exp: 5004
      },
      {
        name: 'Hırs Küpleri',
        exp: 4300
      }
    ];
  }
}
