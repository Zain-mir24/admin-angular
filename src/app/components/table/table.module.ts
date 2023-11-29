import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableModule } from 'primeng/table';

@NgModule({
    declarations:[TableComponent],
    imports:[CommonModule,TableModule],
    exports:[TableComponent],
    providers:[],
})
export class CustomTableModule{}