import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatMainComponent } from './chat-main/chat-main.component';
import { FormsModule } from '@angular/forms';
import { ChatTableComponent } from './chat-table/chat-table.component';
import { CustomTableModule } from '../components/table/table.module';


@NgModule({
  declarations: [
    ChatMainComponent,
    ChatTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomTableModule
  ]
})
export class ChatModule { }
