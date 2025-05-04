import React, { createContext, useContext, useState, useEffect } from 'react';
import { ChatMessage } from '../types/chat';
import { getMessages, sendMessage } from '../services/chatService';

interface ChatContextType {
  messages: ChatMessage[];
  sendMessageToChat: (content: string, chatId: string) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const chatMessages = await getMessages();
      setMessages(chatMessages);
    };

    fetchMessages();
  }, []);

  const sendMessageToChat = async (content: string, chatId: string) => {
    const newMessage = await sendMessage(content, chatId);
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessageToChat }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};