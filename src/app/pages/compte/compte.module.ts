import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComptePage } from './compte.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListeWalletPage } from './liste-wallet/liste-wallet.page';
import { AjoutWalletPage } from './ajout-wallet/ajout-wallet.page';

const routes: Routes = [
  {
    path: '',
    component: ComptePage
  },
  {
    path: 'listewallet',
    component: ListeWalletPage
  },
  {
    path: 'ajoutwallet',
    component: AjoutWalletPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComptePage, ListeWalletPage, AjoutWalletPage]
})
export class ComptePageModule {}
