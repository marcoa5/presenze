import { ValidationErrors, ValidatorFn, AbstractControl, FormGroup } from '@angular/forms';

export class CustomValidators {
static contP(g: FormGroup) {
  const password: string = g.get('password').value; // get password from our password form control
  const confirmPassword: string = g.get('password1').value; // get password from our confirmPassword form control
  // compare is the password math
  if (!confirmPassword){return}
  if (password !== confirmPassword) {
    // if they don't match, set an error in our confirmPassword form control
    g.get('password1').setErrors({ mustMatch: true });
  }
}
}
export function blue(): ValidatorFn {  
    return (control: AbstractControl): { [key: string]: any } | null =>   
        control.value.substring(control.value.length-11,23) === '@epiroc.com' ? null : {epiroc: true};
}
