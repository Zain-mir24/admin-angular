import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  columnHeaders: Array<{
    id: string;
    name: string;
    email: string;
    phone: string;
  }> = [];

  ngOnInit() {
    this.columnHeaders = [
      {
        id: '1000',
        name: 'Bamboo Watch',
        email: 'admin@gmail.com',
        phone: 'Product Description',
      },
      {
        id: '1000',
        name: 'Bamboo Watch',
        email: 'admin@gmail.com',
        phone: 'Product Description',
      },
      {
        id: '1000',
        name: 'Bamboo Watch',
        email: 'admin@gmail.com',
        phone: 'Product Description',
      },
      {
        id: '1000',
        name: 'Bamboo Watch',
        email: 'admin@gmail.com',
        phone: 'Product Description',
      },
    ];
  }
}
