import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TransfertUniteValeurPage } from '../pages/envoi/transfert-unite-valeur/transfert-unite-valeur.page';
import { Toast } from '@ionic-native/toast/ngx';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  constructor(private modal: ModalController,
              private toast: Toast) { }
    async showMoga() {
      this.showToast('Le solde de votre compte est insuffisant. Merci de le recharger à partir d\' un wallet');
      const modal = await this.modal.create({
      component: TransfertUniteValeurPage,
      componentProps: {ismodal : true},
    });
      return await modal.present();
  }
    showToast(message) {
    this.toast.showLongCenter(message).subscribe(value => {
      console.log(value);
    });
  }
}
