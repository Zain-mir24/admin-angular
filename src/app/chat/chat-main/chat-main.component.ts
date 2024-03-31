import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { ChatService } from '../chat.service';
import { Subscription } from 'rxjs';
import { Tthread } from '../types';
@Component({
  selector: 'app-chat-main',
  templateUrl: './chat-main.component.html',
  styleUrls: ['./chat-main.component.css']
})
export class ChatMainComponent implements OnInit {

  message:string ="";
  messagesSubscription!: Subscription;
  messages!:{content:string,sendAt:string}[];
  user_data=localStorage.getItem("login_info");
  all_messages:{
    content: string,
    senderId: number,
    threadId: number,
    sentAt: string
  }[]=[]
  currentUserID:number=0
  constructor(private chatService:ChatService,private cdr: ChangeDetectorRef){}
  ngOnInit(): void {
    if(this.user_data) this.currentUserID=JSON.parse(this.user_data).id
    
    this.fetchThreadMessages()
    this.messagesSubscription = this.chatService.getMessages(1).subscribe(data => {
    
      this.all_messages.push(data)
        // Manually trigger change detection
        this.cdr.detectChanges();
    });

  }
  ngOnChange(){

  }

  fetchThreadMessages(){
    this.chatService.getThreadMessages().subscribe(
       (thread: Tthread) => {
        // this.thread = thread;
        console.log(thread)
        this.all_messages=thread.messages
      },
       (error) => {
        console.error('Error fetching thread:', error);
      }
    );
  }
  ngOnDestroy(): void {
    // Unsubscribe from the messages observable to prevent memory leaks
    this.messagesSubscription.unsubscribe();
  }
  sendMessage(){
    if(this.user_data){
      let user_id=JSON.parse(this.user_data).id
    
 
    this.chatService.sendMessage(this.message,user_id,1);
    }
  }

  getMessage(data:any){
    console.log("data",data)
  }
}
