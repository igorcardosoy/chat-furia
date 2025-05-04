import { User } from './user';

export interface Chat {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ChatMessage {
  id: number;
  chatId: number | string;
  user: User;
  content: string;
}

export interface ChatRoom {
  id: number;
  name: string;
  messages: ChatMessage[];
}
