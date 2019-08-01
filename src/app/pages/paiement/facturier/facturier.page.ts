import { Component, OnInit } from '@angular/core';
import { GlobalVariableService } from 'src/app/services/global-variable.service';

@Component({
  selector: 'app-facturier',
  templateUrl: './facturier.page.html',
  styleUrls: ['./facturier.page.scss'],
})
export class FacturierPage implements OnInit {

  constructor(public glbVariable: GlobalVariableService) { }

  public paiementServices;
  public headerTitle = 'Paiement Facture';
  ngOnInit() {
  this.paiementServices  = [{image: this.glbVariable.IMG_URL + 'senelec.png', libelle: '', chemin: 'paiement/facturier/senelec'},
                           {image: this.glbVariable.IMG_URL + 'sde2.png', libelle: '', chemin: 'paiement/facturier/sde' },
                           {image: this.glbVariable.IMG_URL + 'woyofal.png', libelle: '', chemin: 'paiement/facturier/woyofal' }];
  }

}
