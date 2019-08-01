import { Component, OnInit } from '@angular/core';
import { GlobalVariableService } from 'src/app/services/global-variable.service';

@Component({
  selector: 'app-tigo-cash',
  templateUrl: './tigo-cash.page.html',
  styleUrls: ['./tigo-cash.page.scss'],
})
export class TigoCashPage implements OnInit {

  public headerTitle = 'TIGO-CASH';
  public datarecharge: any = {};
  constructor(public glb: GlobalVariableService) { }

  ngOnInit() {
    this.datarecharge.codeOperateur = '0022';
    this.datarecharge.sousoperateur = '0004';
    this.datarecharge.image         = this.glb.IMG_URL + 'logo_Tigo Cash.png';
    this.datarecharge.chemin         = 'envoi/tigocash';

  }

}
