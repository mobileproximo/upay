import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeddoPage } from './seddo.page';

describe('SeddoPage', () => {
  let component: SeddoPage;
  let fixture: ComponentFixture<SeddoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeddoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeddoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
