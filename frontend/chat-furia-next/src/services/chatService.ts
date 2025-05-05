// filepath: /chat-furia-frontend/chat-furia-frontend/src/services/chatService.ts
import axios from 'axios';
import { ChatMessage } from '../types/chat';

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/chat';

export const sendMessage = async (
  chatId: string,
  content: string,
  userId: string
): Promise<ChatMessage> => {
  const response = await axios.post(`${API_URL}/message`, {
    chatId,
    content,
    userId,
  });
  return response.data;
};

export const getMessages = async (chatId: string): Promise<ChatMessage[]> => {
  const response = await axios.get(`${API_URL}/chat/${chatId}/messages`);

  return response.data.map((message: any) => ({
    id: message.id,
    chatId: message.chatId,
    user: {
      id: message.sender.id,
      username: message.sender.username,
    },
    content: message.content,
    createdAt: new Date(message.createdAt),
    updatedAt: new Date(message.updatedAt),
  }));
};
