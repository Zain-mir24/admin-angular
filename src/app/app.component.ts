import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  shouldDisplaySidebar: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.shouldDisplaySidebar = this.shouldShowSidebar(event.url);
      }
    });
    
  }
  private shouldShowSidebar(url: string): boolean {
    // Implement your logic to determine if the sidebar should be displayed
    // For example, you can check the URL or any other conditions
    return url !== '/login' && url!=='/';
  }

}
