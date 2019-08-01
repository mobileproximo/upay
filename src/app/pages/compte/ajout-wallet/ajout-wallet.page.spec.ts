import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutWalletPage } from './ajout-wallet.page';

describe('AjoutWalletPage', () => {
  let component: AjoutWalletPage;
  let fixture: ComponentFixture<AjoutWalletPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutWalletPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutWalletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
