import { Component } from '@angular/core';

import { Platform, NavController, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ServiceService } from './services/service.service';
import { GlobalVariableService } from './services/global-variable.service';
import { Router } from '@angular/router';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { CodePush } from '@ionic-native/code-push/ngx';

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
    public androidPermissions: AndroidPermissions,
    private codepush: CodePush
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.appVersion.getPackageName().then((val) => {
        this.glb.BASEURL = val === this.glb.prodpackageName ? this.glb.URLPROD : this.glb.URLTEST;
      });
      this.codepush.sync();
      this.platform.resume.subscribe(() => {
        this.codepush.sync();
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
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.RECEIVE_SMS).then(
      result => {
        alert('Has permission? ' + result.hasPermission);
      },
      err => {

        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.RECEIVE_SMS).then(r => {
        }).catch((err) => {
        });
      }
    );
    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.RECEIVE_SMS]);
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
}
