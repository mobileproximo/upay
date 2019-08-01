import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarchandPage } from './marchand.page';

describe('MarchandPage', () => {
  let component: MarchandPage;
  let fixture: ComponentFixture<MarchandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarchandPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarchandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
