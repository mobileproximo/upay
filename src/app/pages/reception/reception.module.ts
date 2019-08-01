import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReceptionPage } from './reception.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { CollectePage } from './collecte/collecte.page';
import { CodeTransfertPage } from './code-transfert/code-transfert.page';

const routes: Routes = [
  {
    path: '',
    component: ReceptionPage
  },
  {
    path: 'collecte',
    component: CollectePage
  }
  ,
  {
    path: 'codetransfert',
    component: CodeTransfertPage
  }
];

@NgModule({
  imports: [
  SharedModule,
  RouterModule.forChild(routes)
  ],
  declarations: [ReceptionPage, CollectePage, CodeTransfertPage]
})
export class ReceptionPageModule {}
