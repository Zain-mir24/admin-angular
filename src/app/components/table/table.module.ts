import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';


@NgModule({
    declarations:[TableComponent],
    imports:[CommonModule,TableModule,PaginatorModule],
    exports:[TableComponent],
    providers:[],
})

export class CustomTableModule{}