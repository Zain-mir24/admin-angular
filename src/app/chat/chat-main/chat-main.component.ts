import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
@Component({
  selector: 'app-chat-main',
  templateUrl: './chat-main.component.html',
  styleUrls: ['./chat-main.component.css']
})
export class ChatMainComponent implements OnInit {

  message:string ="";
  constructor(private chatService:ChatService){}
  ngOnInit(): void {
    
  }

  sendMessage(){
    this.chatService.sendMessage(this.message);
  }

}
