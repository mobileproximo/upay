import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouscriptionPage } from './souscription.page';

describe('SouscriptionPage', () => {
  let component: SouscriptionPage;
  let fixture: ComponentFixture<SouscriptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouscriptionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouscriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
