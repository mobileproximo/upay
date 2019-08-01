import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ServiceService } from './services/service.service';
import { GlobalVariableService } from './services/global-variable.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private serv: ServiceService,
    public glb: GlobalVariableService,
    public navCtrl: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.serv.createDataBase();
      // this.serv.deletealldata();
     // this.serv.insert();
     // this.serv.getdata();
      window.addEventListener('keyboardDidHide', () => {
        this.glb.showheader = true;
  });
      window.addEventListener('keyboardDidShow', (event) => {
        this.glb.showheader = false;
});
    });
  }
  vershome() {
    this.navCtrl.navigateRoot('utilisateur/acceuil');
  }
  deconnexion() {
    this.navCtrl.navigateRoot('utilisateur');

  }
  vershistorique() {
    this.navCtrl.navigateForward('historique');

  }
  versfavoris() {
    this.navCtrl.navigateForward('favoris');
  }
}
