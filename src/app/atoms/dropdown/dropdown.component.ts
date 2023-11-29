import { Component, Input ,ViewEncapsulation} from '@angular/core';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  encapsulation: ViewEncapsulation.None, // Try changing this to None
})
export class DropdownComponent {
  @Input() mainClass: string = '';
  cities: City[] | undefined;

  selectedCity: City | undefined;

  ngOnInit() {
    this.cities = [
      { name: '6 months', code: 'NY' },
      { name: '12 months', code: 'RM' },
      { name: '1 Year', code: 'LDN' }
    ];
  }
}
