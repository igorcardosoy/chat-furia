'use client';

import ChatInput from '@/components/chat/ChatInput';
import MessageList from '@/components/chat/MessageList';
import { useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import useChat from '../../hooks/useChat';

interface ChatRoomProps {
  chatId: string;
}

const ChatRoom = ({ chatId }: ChatRoomProps) => {
  const authContext = useContext(AuthContext);
  const user = authContext?.user?.user;
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, loading, sendMessage } = useChat(chatId);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!user) {
    return (
      <div className='flex items-center justify-center h-full'>
        <div className='bg-gray-900 p-6 rounded-lg border border-gray-800 text-center'>
          <p className='text-gray-300'>Please log in to access the chat.</p>
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col h-full bg-black'>
      <div className='bg-gray-900 p-4 border-b border-gray-800'>
        <h1 className='text-xl font-bold text-white'>
          <span className='text-amber-400'>FURIA</span> Chat:{' '}
          {getChatName(chatId)}
        </h1>
      </div>

      <div className='flex-grow overflow-auto bg-gray-950'>
        {loading ? (
          <div className='flex items-center justify-center h-full'>
            <div className='text-center p-6'>
              <div className='w-12 h-12 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto'></div>
              <p className='mt-4 text-gray-400'>Loading messages...</p>
            </div>
          </div>
        ) : (
          <>
            <MessageList messages={messages} currentUserId={user.id} />
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      <div className='border-t border-gray-800'>
        <ChatInput
          onSendMessage={content => sendMessage(content, user)}
          disabled={loading}
        />
      </div>
    </div>
  );
};

function getChatName(chatId: string): string {
  const chatNames: { [key: string]: string } = {
    '1': 'Geral',
    '2': 'LoL',
    '3': 'Valorant',
    '4': 'CS2',
    '5': 'RL',
    '6': 'Xadrez',
  };

  return chatNames[chatId] || chatId;
}

export default ChatRoom;
