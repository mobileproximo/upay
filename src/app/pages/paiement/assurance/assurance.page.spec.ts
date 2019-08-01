import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssurancePage } from './assurance.page';

describe('AssurancePage', () => {
  let component: AssurancePage;
  let fixture: ComponentFixture<AssurancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssurancePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssurancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
