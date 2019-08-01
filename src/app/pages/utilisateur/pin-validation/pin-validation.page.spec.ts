import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinValidationPage } from './pin-validation.page';

describe('PinValidationPage', () => {
  let component: PinValidationPage;
  let fixture: ComponentFixture<PinValidationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinValidationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinValidationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
