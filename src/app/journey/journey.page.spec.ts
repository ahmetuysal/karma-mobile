import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyPage } from './journey.page';

describe('JourneyPage', () => {
  let component: JourneyPage;
  let fixture: ComponentFixture<JourneyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
