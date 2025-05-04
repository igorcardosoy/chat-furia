import { UserProfile } from './user';

export interface Message {
  id: number;
  chatId: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  sender: UserProfile; // Agora usamos o objeto UserProfile completo
}
