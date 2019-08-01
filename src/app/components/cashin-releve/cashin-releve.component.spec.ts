import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashinReleveComponent } from './cashin-releve.component';

describe('CashinReleveComponent', () => {
  let component: CashinReleveComponent;
  let fixture: ComponentFixture<CashinReleveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashinReleveComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashinReleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
