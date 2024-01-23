import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormValidationService {
  hasErrors(control: AbstractControl<any>): boolean {
    return this.checkErrors(control);
  }

  private checkErrors(control: AbstractControl<any>): boolean {
    if (control instanceof FormControl) {
      return !!control.errors;
    } else if (control instanceof FormGroup) {
      const controls = control.controls;

      for (const key in controls) {
        if (controls.hasOwnProperty(key)) {
          const ctrl = controls[key];
          if (this.checkErrors(ctrl)) {
            return true;
          }
        }
      }
    }

    return false;
  }
}
