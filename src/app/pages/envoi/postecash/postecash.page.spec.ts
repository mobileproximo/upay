import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostecashPage } from './postecash.page';

describe('PostecashPage', () => {
  let component: PostecashPage;
  let fixture: ComponentFixture<PostecashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostecashPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostecashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
