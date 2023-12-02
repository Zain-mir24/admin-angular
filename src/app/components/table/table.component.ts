import { Component, Input } from '@angular/core';
interface Column {
  field: string;
  header: string;
}
interface Data {}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  cols!: Column[];
  data: any;
  @Input() tableHeader: string = '';
  @Input() ColumnHeader: any = [];
  ngOnInit() {
    this.data = this.ColumnHeader;
    // this.ColumnHeader.map((item: any, index: number) => {
    //   Object.keys(item).map((item2)=>{
    //     console.log(item2)
    //     this.cols.push({
    //       field:item2,
    //       header:item2
    //     })
    //   })
    // });
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'name', header: 'Name' },
      { field: 'email', header: 'email' },
      { field: 'phone', header: 'Phone' },
    ];
  }
}
