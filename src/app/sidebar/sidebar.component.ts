import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface navTypes {
  id: number;
  name: string;
  icon: string;
  active: boolean;
  url: string;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private router:Router) {}
  navItems: Array<navTypes> = [
    {
      id: 1,
      name: 'Dashboard',
      icon: 'assets/Images/bar-chart.svg',
      active: true,
      url: '/Dashboard',
    },
    {
      id: 2,
      name: 'Users',
      icon: 'assets/Images/user.svg',
      active: false,
      url: '/Users',
    },
    {
      id: 3,
      name: 'Product',
      icon: 'assets/Images/user.svg',
      active: false,
      url: '/Products',
    },
    {
      id: 4,
      name: 'Orders',
      icon: 'assets/Images/user.svg',
      active: false,
      url: '/Orders',
    },
  ];

  getClass(item: any): string {
    const baseClass = 'md:w-[11rem] cursor-pointer lg:w-[11.75rem] h-[35px] flex items-center justify-between md:ml-[12px] lg:ml-[22px] rounded-[8px] pl-[17px] pr-[19px]';
    const activeClass = item.active ? 'bg-[#212121]' : '';
    
    return `${baseClass} ${activeClass}`;
  }

  handleClick(item:navTypes){
    this.navItems.map((item2,index)=>{
      if(item2.id===item.id){
        item2.active=true
        return
      }
     item2.active=false;
    })
    this.router.navigate([`${item.url}`])
  }
}
