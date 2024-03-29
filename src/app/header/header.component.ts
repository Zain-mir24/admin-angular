import { Component , Input} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router) {}
  @Input() title: string = '';
  @Input() semiTitle: string = '';
  myClick() {
    this.router.navigate(['/secondComponent']);
  }
}
