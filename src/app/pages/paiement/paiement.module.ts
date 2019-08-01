import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaiementPage } from './paiement.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { MarchandPage } from './marchand/marchand.page';
import { AssurancePage } from './assurance/assurance.page';
import { CreditPage } from './credit/credit.page';
import { AbonnementPage } from './abonnement/abonnement.page';

const routes: Routes = [
  {
    path: '',
    component: PaiementPage
  },
{
  path: 'facturier',
  loadChildren: './facturier/facturier.module#FacturierPageModule'
},
{
  path: 'marchand',
  component: MarchandPage
},

{
  path: 'assurance',
  component: AssurancePage
},
{
  path: 'credit',
  component: CreditPage
},
{
  path: 'abonnement',
  component: AbonnementPage
},



];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PaiementPage, MarchandPage, AbonnementPage, CreditPage, AssurancePage]
})
export class PaiementPageModule {}
