import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ServiceService } from 'src/app/services/service.service';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-liste-wallet',
  templateUrl: './liste-wallet.page.html',
  styleUrls: ['./liste-wallet.page.scss'],
})
export class ListeWalletPage implements OnInit {
  public headerTitle = 'Mes Wallets';
  wallets: any[];
  constructor(public navCtrl: NavController,
              public serv: ServiceService) { }

  ngOnInit() {
  }
  ajoutWallet() {
    this.navCtrl.navigateForward('compte/ajoutwallet');

  }
  ionViewDidEnter() {
    this.getfavoris();
  }

  getfavoris() {
    this.wallets = [];
    this.serv.getDataBase()
    .then((db: SQLiteObject) => {
      const sql = 'select * from wallet ';
      const values = [];
      db.executeSql(sql, values)
        .then((data) => {
          for (let i = 0; i < data.rows.length; i++) {
            this.wallets.push((data.rows.item(i)));
          }
          })
        .catch(e => console.log(e));
    })
    .catch(e => console.log(e));

  }
}
