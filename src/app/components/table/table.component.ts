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
  newData:any=[];
  @Input() tableHeader: string = '';
  @Input() ColumnHeader: any = [];
  ngOnInit() {
    this.data = this.ColumnHeader;
    this.ColumnHeader.slice(0,1).map((item: any, index: number) => {
      Object.keys(item).map((item2)=>{
        this.newData.push({
          field:item2,
          header:item2
        })
      
      })
    });
    this.cols=this.newData
   
  }
}
