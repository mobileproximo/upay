import { Component, OnInit } from '@angular/core';
import { GlobalVariableService } from 'src/app/services/global-variable.service';

@Component({
  selector: 'app-postecash',
  templateUrl: './postecash.page.html',
  styleUrls: ['./postecash.page.scss'],
})
export class PostecashPage implements OnInit {
  public headerTitle = 'postecash';
  public datacashin = {image: this.glb.IMG_URL + 'postecash.png', chemin: 'envoi/postecash', codeOper: '0053', sousOper: '0001' };

  constructor(public glb: GlobalVariableService) { }

  ngOnInit() {
  }

}
