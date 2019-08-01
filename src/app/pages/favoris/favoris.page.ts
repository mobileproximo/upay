import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';
import { GlobalVariableService } from 'src/app/services/global-variable.service';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.page.html',
  styleUrls: ['./favoris.page.scss'],
})
export class FavorisPage implements OnInit {
  public headerTitle = 'Favoris';
  public favoris: any ;
  constructor(public serv: ServiceService,
              public glb: GlobalVariableService) { }

  ngOnInit() {

  }
  ionViewDidEnter() {
    this.getfavoris();
  }

  getfavoris() {
    this.favoris = [];
    this.serv.getDataBase()
    .then((db: SQLiteObject) => {
      const sql = 'select * from favoris where numcompte=? order by nombretrx desc ';
      const values = [this.glb.NUMCOMPTE];
      db.executeSql(sql, values)
        .then((data) => {
          for (let i = 0; i < data.rows.length; i++) {
            this.favoris.push((data.rows.item(i)));
          }
          })
        .catch(e => console.log(e));
    })
    .catch(e => console.log(e));

  }

}
