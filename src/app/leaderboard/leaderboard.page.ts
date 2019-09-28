import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.scss']
})
export class LeaderboardPage implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit() {}

  clickTab(event: Event, tab: string) {
    event.stopImmediatePropagation();
    this.router.navigate([`tabs/leaderboard/${tab}`]);
  }
}
