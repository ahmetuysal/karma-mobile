import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardTeamPage } from './leaderboard-team.page';

describe('LeaderboardTeamPage', () => {
  let component: LeaderboardTeamPage;
  let fixture: ComponentFixture<LeaderboardTeamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderboardTeamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
