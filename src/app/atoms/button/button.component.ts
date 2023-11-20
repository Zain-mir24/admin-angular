import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() mainClasses:string=''
  @Input() buttonText:string='';
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  handleButtonClick(): void {
    this.buttonClick.emit();
  }

}
