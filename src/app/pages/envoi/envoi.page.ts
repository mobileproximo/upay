import { Component, OnInit } from '@angular/core';
import { GlobalVariableService } from 'src/app/services/global-variable.service';

@Component({
  selector: 'app-envoi',
  templateUrl: './envoi.page.html',
  styleUrls: ['./envoi.page.scss'],
})
export class EnvoiPage implements OnInit {
  public envoiServices;
  public headerTitle = 'j\'envoie';
  constructor(public glbVariable: GlobalVariableService) { }

  ngOnInit() {

    this.envoiServices  = [{image: this.glbVariable.IMG_URL + 'omoney.png', libelle: 'Orange Money', chemin: 'envoi/orangemoney'},
    {image: this.glbVariable.IMG_URL + 'wizall.png', libelle: 'Wizall', chemin: 'envoi/wizall' },
    {image: this.glbVariable.IMG_URL + 'logo_Tigo Cash.png', libelle: 'TigoCash', chemin: 'envoi/tigocash' },
    {image: this.glbVariable.IMG_URL + 'postecash.png', libelle: 'PosteCash', chemin: 'envoi/postecash'},
    {image: this.glbVariable.IMG_URL + 'emoney.png', libelle: 'E-Money', chemin: 'envoi/emoney'},
    {image: this.glbVariable.IMG_URL + 'logo_Orange.png', libelle: 'Seddo', chemin: 'envoi/seddo'},
    {image: this.glbVariable.IMG_URL + 'logo_Tigo.png', libelle: 'IZI', chemin: 'envoi/izi'},
    {image: this.glbVariable.IMG_URL + 'logo_Expresso.png', libelle: 'Yakalma', chemin: 'envoi/yakalma'},
    {image: this.glbVariable.IMG_URL + 'logo_rapido.png', libelle: 'Rapido', chemin: 'envoi/rapido'},
    {image: this.glbVariable.IMG_URL + 'logo-upay-portrait.png', libelle: 'UPAY', chemin: 'envoi/upaywallet'},
  ];
  }

}