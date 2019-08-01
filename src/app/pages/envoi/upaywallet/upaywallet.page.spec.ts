import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpaywalletPage } from './upaywallet.page';

describe('UpaywalletPage', () => {
  let component: UpaywalletPage;
  let fixture: ComponentFixture<UpaywalletPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpaywalletPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpaywalletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
