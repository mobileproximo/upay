import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturierPage } from './facturier.page';

describe('FacturierPage', () => {
  let component: FacturierPage;
  let fixture: ComponentFixture<FacturierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturierPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
