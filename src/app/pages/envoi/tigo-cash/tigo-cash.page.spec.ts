import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TigoCashPage } from './tigo-cash.page';

describe('TigoCashPage', () => {
  let component: TigoCashPage;
  let fixture: ComponentFixture<TigoCashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TigoCashPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TigoCashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
