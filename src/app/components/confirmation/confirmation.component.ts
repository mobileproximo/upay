import { Component, OnInit, HostListener } from '@angular/core';
import { NavParams, ModalController, NavController } from '@ionic/angular';
import { Subscription, fromEvent } from 'rxjs';
import { GlobalVariableService } from 'src/app/services/global-variable.service';
import { FormatcodePipe } from 'src/app/pipes/formatcode.pipe';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnInit {
  private backbuttonSubscription: Subscription;

  constructor(public navParams: NavParams,
              public modalController: ModalController,
              public glb: GlobalVariableService,
              public formatcode: FormatcodePipe,
              public navCtrl: NavController) { }
commingData: any = {};
  ngOnInit() {
    this.commingData = this.navParams.data.data;
    if (this.commingData.codeTransfert) {
      this.commingData.codeTransfert = this.formatcode.transform(this.commingData.codeTransfert, 3, '-');
    }
  //  alert(JSON.stringify(this.commingData));
    const event = fromEvent(document, 'backbutton');
    this.backbuttonSubscription = event.subscribe(async () => {
        const modal = await this.modalController.getTop();
        if (modal) {
            modal.dismiss();
        }
    });
  }
/*   @HostListener('document:ionBackButton', ['$event'])
  private async overrideHardwareBackAction($event: any) {
      await this.modalController.dismiss();
  } */

  ngOnDestroy() {
    this.backbuttonSubscription.unsubscribe();
}
gohome() {
  this.navCtrl.navigateRoot('/utilisateur/acceuil');
  this.dismiss();
}
dismiss() {
  this.modalController.dismiss();
}

}
