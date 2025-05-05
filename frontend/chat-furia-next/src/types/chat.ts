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
  createdAt: Date;
  updatedAt: Date;
}

export interface ChatRoom {
  id: number;
  name: string;
  messages: ChatMessage[];
}
