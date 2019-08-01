import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouscriptionSuitePage } from './souscription-suite.page';

describe('SouscriptionSuitePage', () => {
  let component: SouscriptionSuitePage;
  let fixture: ComponentFixture<SouscriptionSuitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouscriptionSuitePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouscriptionSuitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
