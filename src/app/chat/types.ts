export interface Tthread {
    Tid: number;
    userIds: number[];
    messages: Message[];
  }
  
  interface Message {
    Mid: number;
    content: string;
    senderId: number;
    threadId: number;
    sentAt: string;
  }