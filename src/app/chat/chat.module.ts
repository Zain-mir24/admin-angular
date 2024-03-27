import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatMainComponent } from './chat-main/chat-main.component';
import { FormsModule } from '@angular/forms';
import { ChatTableComponent } from './chat-table/chat-table.component';



@NgModule({
  declarations: [
    ChatMainComponent,
    ChatTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ChatModule { }
