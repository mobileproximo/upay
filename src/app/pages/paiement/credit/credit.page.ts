import { Component, OnInit } from '@angular/core';
import { GlobalVariableService } from 'src/app/services/global-variable.service';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.page.html',
  styleUrls: ['./credit.page.scss'],
})
export class CreditPage implements OnInit {
  public envoiServices;

  public headerTitle = 'credit';
  constructor(public glbVariable: GlobalVariableService) { }

  ngOnInit() {
    this.envoiServices  = [ {image: this.glbVariable.IMG_URL + 'logo_Orange.png', libelle: '', chemin: 'envoi/seddo'},
    {image: this.glbVariable.IMG_URL + 'logo_Tigo.png', libelle: '', chemin: 'envoi/izi'},
    {image: this.glbVariable.IMG_URL + 'logo_Expresso.png', libelle: '', chemin: 'envoi/yakalma'},
    {image: this.glbVariable.IMG_URL + 'logo_rapido.png', libelle: '', chemin: 'envoi/rapido'} ];
  }

}
