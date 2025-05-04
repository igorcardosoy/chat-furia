// filepath: /chat-furia-frontend/chat-furia-frontend/src/hooks/useChat.ts
import { useEffect, useContext, useState } from 'react';
import { ChatContext } from '../contexts/ChatContext';
import { ChatMessage } from '../types/chat';
import { socket } from '../lib/socket';

const useChat = (chatId: string) => {
  const { messages, setMessages } = useContext(ChatContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      // Fetch initial messages from the server
      const response = await fetch(`/api/chat/messages/${chatId}`);
      const data = await response.json();
      setMessages(data);
      setLoading(false);
    };

    fetchMessages();

    socket.emit('joinChat', chatId);

    socket.on('receiveMessage', (message: ChatMessage) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, [chatId, setMessages]);

  return { messages, loading };
};

export default useChat;