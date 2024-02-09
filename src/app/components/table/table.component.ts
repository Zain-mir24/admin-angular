import { Component, Input, Output, EventEmitter } from '@angular/core';
interface Column {
  field: string;
  header: string;
}
interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  cols!: Column[];
  data: any;
  newData: any = [];
  first: number = 1;
  rows: number = 5;

  @Input() records = 0;
  @Input() tableHeader: string = '';
  @Input() ColumnHeader: any = [];
  @Output() pageEvent = new EventEmitter<string>();

  onPageChange(event: any) {
    this.first = event.page;
    this.rows = event.rows;
    this.pageEvent.emit(event);
  }


  ngOnChanges(changes: any) {
    this.data=changes.ColumnHeader.currentValue
  }

  ngOnInit() {
    this.data = this.ColumnHeader;
    
    this.ColumnHeader.slice(0, 1).map((item: any, index: number) => {
      Object.keys(item).map((item2) => {
        this.newData.push({
          field: item2,
          header: item2,
        });
      });
    });
    this.cols = this.newData;
  }
}
