import { Component, OnInit, Input } from '@angular/core';
import { NavController, ModalController, MenuController } from '@ionic/angular';
import { GlobalVariableService } from 'src/app/services/global-variable.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
@Input() headerTitle;
  constructor(public navcrtl: NavController,
              public modalController: ModalController,
              public menuCtrl: MenuController,
              public glb: GlobalVariableService) { }

  ngOnInit() {}
  historique(){
    this.navcrtl.navigateForward('historique');
  }
  compte(){
    this.navcrtl.navigateForward('compte');

  }
  acceuil(){
    this.navcrtl.navigateRoot('utilisateur/acceuil');

  }
  async closeModal(){
  const modal = await this.modalController.getTop();
  if (modal) {
      modal.dismiss();
  }
  }
  toggleMenu() {
    //console.log('test')
  //  this.menuCtrl.enable(true, 'content1');
    //this.menuCtrl.open('content1'); //Add this method to your button click function
  }
}
