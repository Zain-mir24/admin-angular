import { Component , Input} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent  {
  constructor(private router: Router) {}
  user_info=localStorage.getItem("login_info");
  @Input() title: any = '';
  @Input() semiTitle: string = '';


  ngOnInit(){
    if (this.title) {
      // Use the title prop
      this.title = this.title;
    } else {
      // Use the title from localStorage
      const user_info = JSON.parse(localStorage.getItem("login_info") ?? '{}');
      this.title = user_info.username;
    }
  }
  myClick() {
    this.router.navigate(['/secondComponent']);
  }
}
