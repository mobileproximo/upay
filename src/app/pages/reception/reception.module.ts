import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    path: 'codetransfert',
    component: CodeTransfertPage
  },
  {
    path: 'collecte',
    component: CollectePage
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
