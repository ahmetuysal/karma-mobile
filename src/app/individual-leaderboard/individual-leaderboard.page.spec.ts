import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualLeaderboardPage } from './individual-leaderboard.page';

describe('IndividualLeaderboardPage', () => {
  let component: IndividualLeaderboardPage;
  let fixture: ComponentFixture<IndividualLeaderboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualLeaderboardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualLeaderboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
