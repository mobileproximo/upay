import { Component } from '@angular/core';

import { Platform, NavController, AlertController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ServiceService } from './services/service.service';
import { GlobalVariableService } from './services/global-variable.service';
import { Router } from '@angular/router';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { CodePush } from '@ionic-native/code-push/ngx';
import { Network } from '@ionic-native/network/ngx';

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
    private alertController: AlertController,
    private appVersion: AppVersion,
    private codepush: CodePush,
    private network: Network,
    private toastController: ToastController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.codepush.sync().subscribe((syncStatus) => {});
      this.platform.resume.subscribe(() => {
        this.codepush.sync().subscribe((syncStatus) => { });
      });
      this.checkNetwork();
      this.appVersion.getPackageName().then((val) => {
        this.glb.BASEURL = val === this.glb.prodpackageName ? this.glb.URLPROD : this.glb.URLTEST;
      });


      this.statusBar.backgroundColorByHexString('#2c5aa3');
      this.splashScreen.hide();
      this.serv.createDataBase();
      window.addEventListener('keyboardDidHide', () => {
        this.glb.showheader = true;
      });
      window.addEventListener('keyboardDidShow', (event) => {
        this.glb.showheader = false;
      });
      document.addEventListener('backbutton', () => {
        const routes = ['/utilisateur', '/utilisateur/acceuil'];
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
      buttons: [{
        text: 'Non',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
        }
      }, {
        text: 'oui',
        handler: () => {

          // tslint:disable-next-line: no-string-literal
          navigator['app'].exitApp();
        }
      }]
    });

    await alert.present();
  }
   checkNetwork() {
    this.network.onDisconnect().subscribe(() => {
      this.serv.showToast('Vous n\'avez plus d\'accès internet');
      this.glb.ISCONNECTED = false;

    });
    this.network.onConnect().subscribe(() => {
      if (!this.glb.ISCONNECTED) {

        this.affichemessageToast('Connexion retrouvée');
      }
      this.glb.ISCONNECTED = true;

    });
  }
  async affichemessageToast(message: string) {
    const toast = await this.toastController.create({
      message,
      color: 'success',
      position: 'bottom',
      duration: 2000
    });
    toast.present();
  }
}
