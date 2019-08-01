import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckComptePage } from './check-compte.page';

describe('CheckComptePage', () => {
  let component: CheckComptePage;
  let fixture: ComponentFixture<CheckComptePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckComptePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckComptePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
