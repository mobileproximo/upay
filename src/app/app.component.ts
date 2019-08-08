import { Component } from '@angular/core';

import { Platform, NavController, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ServiceService } from './services/service.service';
import { GlobalVariableService } from './services/global-variable.service';
import { Router } from '@angular/router';

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
    public navCtrl: NavController,
    public router: Router,
    private alertController: AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#2c5aa3');
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
      document.addEventListener('backbutton', () => {
  const routes = ['/utilisateur', '/utilisateur/acceuil', '/utilisateur/bienvenue'];
  if (routes.includes(this.router.url)) {
     this.presentAlert();
  }
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
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'UPay',
     // subHeader: 'Subtitle',
      message: 'Voulez-vous vraiment quitter l\'application?',
      cssClass: 'alertSucces',
      buttons: [        {
        text: 'Non',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'oui',
        handler: () => {

// tslint:disable-next-line: no-string-literal
          navigator['app'].exitApp();
          console.log('Confirm Okay');
        }
      }]
    });

    await alert.present();
  }
}
