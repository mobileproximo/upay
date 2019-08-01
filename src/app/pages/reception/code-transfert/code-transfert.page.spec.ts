import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeTransfertPage } from './code-transfert.page';

describe('CodeTransfertPage', () => {
  let component: CodeTransfertPage;
  let fixture: ComponentFixture<CodeTransfertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeTransfertPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeTransfertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
