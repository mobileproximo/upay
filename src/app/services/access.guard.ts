import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalVariableService } from './global-variable.service';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate  {
  constructor(private glb: GlobalVariableService, private serv: ServiceService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.glb.IDSESS !== '') {
    return true;
    } else {
      this.serv.showAlert('Merci de vous connecter pour acceder à ce service');
      return false;
    }
  }

}
