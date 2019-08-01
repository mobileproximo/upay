import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacturierPage } from './facturier.page';
import { SenelecPage } from './senelec/senelec.page';
import { SdePage } from './sde/sde.page';
import { WoyofalPage } from './woyofal/woyofal.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReleveEncaissementComponent } from 'src/app/components/releve-encaissement/releve-encaissement.component';


const routes: Routes = [
  {
    path: '',
    component: FacturierPage,
  },
  {
    path: 'senelec',
    component: SenelecPage
  },
  {
    path: 'sde',
    component: SdePage
  },
  {
    path: 'woyofal',
    component: WoyofalPage
  }


];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FacturierPage, SenelecPage, SdePage, WoyofalPage, ReleveEncaissementComponent]
})
export class FacturierPageModule {}
