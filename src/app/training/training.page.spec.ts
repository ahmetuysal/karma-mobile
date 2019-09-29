import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPage } from './training.page';

describe('TrainingPage', () => {
  let component: TrainingPage;
  let fixture: ComponentFixture<TrainingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
