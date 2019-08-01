import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectePage } from './collecte.page';

describe('CollectePage', () => {
  let component: CollectePage;
  let fixture: ComponentFixture<CollectePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
