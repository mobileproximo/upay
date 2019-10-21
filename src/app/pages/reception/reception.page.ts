import { Component, OnInit } from '@angular/core';
import { GlobalVariableService } from 'src/app/services/global-variable.service';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.page.html',
  styleUrls: ['./reception.page.scss'],
})
export class ReceptionPage implements OnInit {

  constructor(public glbVariable: GlobalVariableService ) { }
  public paiementServices;
  public headerTitle = 'Reception';
  ngOnInit() {
  this.paiementServices  = [{image: this.glbVariable.IMG_URL + 'codetransfert.png',
                            libelle: 'Reception de transfert', chemin: 'reception/codetransfert'},
                            {image: this.glbVariable.IMG_URL + 'collecte.png',
                            libelle: 'Collecte de creance', chemin: 'reception/collecte'}
                          ];
  }

}
