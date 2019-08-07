import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidatorPhone } from 'src/app/components/customValidator/custom-validator';
import { ServiceService } from 'src/app/services/service.service';
import { GlobalVariableService } from 'src/app/services/global-variable.service';
import { Storage } from '@ionic/storage';
import { NavController} from '@ionic/angular';
@Component({
  selector: 'app-check-compte',
  templateUrl: './check-compte.page.html',
  styleUrls: ['./check-compte.page.scss'],
})
export class CheckComptePage implements OnInit {
  public Userdata: FormGroup;
  constructor(public formBuilder: FormBuilder,
              public serv: ServiceService,
              public glb: GlobalVariableService,
              public storage: Storage,
              public navCtrl: NavController) {
    this.Userdata = this.formBuilder.group({
      login: ['', [Validators.required, CustomValidatorPhone]]
    });
  }


  ngOnInit() {
  }

  checkCompte() {
    const userdata = this.Userdata.getRawValue();
    userdata.login = '221' + this.Userdata.controls.login.value;
    userdata.login = userdata.login.replace(/-/g, '');
    this.serv.afficheloading();
    this.serv.posts('connexion/checkCompte.php', userdata, {}).then(data => {
      this.serv.dismissloadin();
      const reponse = JSON.parse(data.data);
      if (reponse.returnCode) {
        if (reponse.returnCode === '0') {
          this.storage.set('login', userdata.login);
          this.serv.showToast('Compte bien recuperé');
          this.navCtrl.navigateRoot('utilisateur');
        } else { this.serv.showError(reponse.errorLabel); }
      } else {
        this.serv.showError('Reponse inattendue  ');
      }


    }).catch(err => {
      this.serv.dismissloadin();
      if (err.status === 500) {
        this.serv.showError('Une erreur interne s\'est produite  ERREUR 500');
      } else {
        this.serv.showError('Impossible d\'atteindre le serveur veuillez réessayer ' + JSON.stringify(err));
      }
    });
  }

}
