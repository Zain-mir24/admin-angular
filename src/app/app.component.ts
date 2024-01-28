import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  shouldDisplaySidebar: boolean = true;

  constructor(private router: Router,private primengConfig: PrimeNGConfig) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.shouldDisplaySidebar = this.shouldShowSidebar(event.url);
      }
    });
    
  }
  ngOnInit() {
    this.primengConfig.ripple = true;
    this.primengConfig.zIndex = {
      modal: 1100,    // dialog, sidebar
      overlay: 1000,  // dropdown, overlaypanel
      menu: 1000,     // overlay menus
      tooltip: 1100   // tooltip
  };
}
  private shouldShowSidebar(url: string): boolean {
    // Implement your logic to determine if the sidebar should be displayed
    // For example, you can check the URL or any other conditions
    console.log(url)
    const isSignupVerifyRoute: boolean = url.includes('/signup-verify/')
    return url !== '/login' && url!=='/' && url!=='/signup' && !isSignupVerifyRoute;
  }

}
