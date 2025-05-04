'use client';

import { User } from '@/types/user';
import { socket } from '@/utils/socket';
import { useContext, useEffect, useState } from 'react';
import { ChatContext } from '../contexts/ChatContext';
import { getMessages } from '../services/chatService';
import { ChatMessage } from '../types/chat';

const useChat = (chatId: string) => {
  const { messages, setMessages } = useContext(ChatContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setLoading(true);
        const data = await getMessages(chatId);
        setMessages(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();

    socket.emit('joinChat', chatId);

    socket.on('newMessage', (message: ChatMessage) => {
      setMessages(prevMessages => [...prevMessages, message]);
    });

    return () => {
      socket.off('newMessage');
      socket.emit('leaveChat', chatId);
    };
  }, [chatId, setMessages]);

  const sendMessage = (content: string, user: User) => {
    if (!socket) return;

    socket.emit('sendMessage', {
      chatId,
      user: user,
      content,
    });
  };

  return { messages, loading, sendMessage };
};

export default useChat;
