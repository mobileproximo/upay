import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BienvenuePage } from './bienvenue.page';

describe('BienvenuePage', () => {
  let component: BienvenuePage;
  let fixture: ComponentFixture<BienvenuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BienvenuePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BienvenuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
