import { Component, OnInit } from '@angular/core';
import { GlobalVariableService } from 'src/app/services/global-variable.service';

@Component({
  selector: 'app-wizall',
  templateUrl: './wizall.page.html',
  styleUrls: ['./wizall.page.scss'],
})
export class WizallPage implements OnInit {
  public headerTitle = 'wizall';
  public datacashin = {image: this.glb.IMG_URL + 'wizall.png', chemin: 'envoi/wizall', codeOper: '0057', sousOper: '0001' };
  constructor(public glb: GlobalVariableService) { }

  ngOnInit() {
  }

}
