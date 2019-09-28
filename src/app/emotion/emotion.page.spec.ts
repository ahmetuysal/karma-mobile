import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionPage } from './emotion.page';

describe('EmotionPage', () => {
  let component: EmotionPage;
  let fixture: ComponentFixture<EmotionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmotionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmotionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
