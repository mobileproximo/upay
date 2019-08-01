import { FormControl } from '@angular/forms';

export function CustomValidatorPhone(control: FormControl) {
    let telephone = control.value === null ? '' : control.value  ;
    telephone = telephone.replace(/-/g, '');
    telephone = telephone.replace(/ /g, '');
    const  numeroautorisé = ['77', '78', '70', '76'];
    const retour = numeroautorisé.indexOf(telephone.substring(0, 2));
    if (retour === -1) {
    return { invalidCustom: true };
    }
    return null;
  }


