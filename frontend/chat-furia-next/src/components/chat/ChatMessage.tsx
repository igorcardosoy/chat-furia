import React from 'react';
import { ChatMessage as ChatMessageType } from '../../types/chat';

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <div className='chat-message p-3 rounded-lg mb-2 max-w-3xl'>
      <div className='flex items-center mb-1'>
        <strong className='text-amber-400'>{message.user.username}</strong>
        <span className='text-gray-500 text-xs ml-2'>
          {new Date(message.createdAt).toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </span>
      </div>
      <div className='text-white'>{message.content}</div>
    </div>
  );
};

export default ChatMessage;
