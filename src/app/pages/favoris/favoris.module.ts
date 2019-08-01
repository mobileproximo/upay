import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavorisPage } from './favoris.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: FavorisPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FavorisPage]
})
export class FavorisPageModule {}
