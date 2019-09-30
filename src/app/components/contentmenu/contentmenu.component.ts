import { Component, OnInit, Input } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-contentmenu',
  templateUrl: './contentmenu.component.html',
  styleUrls: ['./contentmenu.component.scss'],
})
export class ContentmenuComponent implements OnInit {
  @Input() services;
  constructor(public navCtrl: NavController) { }

  openpage(chemin: string) {
    this.navCtrl.navigateForward(chemin);
  }

  ngOnInit() {
  }

}
