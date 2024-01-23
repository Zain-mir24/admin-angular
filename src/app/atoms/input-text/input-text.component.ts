import { Component,Input, forwardRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
  providers:
  [ { 
  provide: NG_VALUE_ACCESSOR,
  multi: true,
  useExisting: forwardRef(() => InputTextComponent),
}],
})
export class InputTextComponent  {
  @Input() inputPlaceholder: string = ''; // Define an Input property
  @Input() formControlValue:any;
  @Input() formGroup!:FormGroup;
  @Input() mainClasses:string=''
  
  ngOnInit(){
    console.log(this.formControlValue)
  }
}
