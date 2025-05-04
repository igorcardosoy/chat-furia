'use client';
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (email: string, password: string) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};

export const register = async (
  username: string,
  email: string,
  password: string
) => {
  const response = await api.post('/auth/register', {
    username,
    email,
    password,
  });
  return response.data;
};

export const fetchChatMessages = async (chatId: string) => {
  const response = await api.get(`/chat/${chatId}/messages/`);
  return response.data;
};

export const sendMessage = async (
  chatId: string,
  content: string,
  userId: string
) => {
  const response = await api.post('/chat/message', { chatId, content, userId });
  return response.data;
};

export default api;
