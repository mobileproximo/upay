import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeWalletPage } from './liste-wallet.page';

describe('ListeWalletPage', () => {
  let component: ListeWalletPage;
  let fixture: ComponentFixture<ListeWalletPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeWalletPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeWalletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
