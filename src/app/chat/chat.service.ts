import { Injectable } from "@angular/core";
import { io } from "socket.io-client";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tthread } from "./types";
@Injectable({
  providedIn: 'root'
})
export class ChatService {
 
  private socket = io('http://localhost:3000');
constructor(private http: HttpClient){}
  sendMessage(content: string,senderId:number, threadId:number){
    let data={content,senderId,threadId}
    this.socket.emit('send_message', data);
  }

  getMessages(threadId:number) {
    let observable = new Observable<any>(observer => {
      this.socket.on(`new-message-${threadId}`, (data:any) => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); };  
    });
    return observable;
  }

  getThreadMessages(): Observable<any> {
    try {
      const headers = { Authorization: 'true' };
      // Include headers in the HTTP request
      const options = { headers: headers };
      const get_thread_messages = '/chat/1';
      return this.http.get(get_thread_messages,options);
    } catch (e:any) {
      return e;
    }
 
}
}