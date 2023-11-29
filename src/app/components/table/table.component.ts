import { Component, Input } from '@angular/core';
interface Column {
  field: string;
  header: string;
}
interface Data {

}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  cols!: Column[];
  data: any;
  @Input() tableHeader:string='';
  ngOnInit() {
    this.data = [
      {
        id: '1000',
        name: 'Bamboo Watch',
        email: 'admin@gmail.com',
        quantity: 'Product Description',
    
      },
      {
        id: '1000',
        name: 'Bamboo Watch',
        email: 'admin@gmail.com',
        quantity: 'Product Description',
    
      }, {
        id: '1000',
        name: 'Bamboo Watch',
        email: 'admin@gmail.com',
        quantity: 'Product Description',
    
      }, {
        id: '1000',
        name: 'Bamboo Watch',
        email: 'admin@gmail.com',
        quantity: 'Product Description',
    
      },
    ];
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'name', header: 'Name' },
      { field: 'email', header: 'email' },
      { field: 'quantity', header: 'Quantity' },
    ];
  }
}
