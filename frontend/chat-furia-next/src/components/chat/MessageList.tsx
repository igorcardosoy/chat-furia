import React from 'react';
import { ChatMessage as ChatMessageType } from '../../types/chat';
import ChatMessage from './ChatMessage';

interface MessageListProps {
  messages: ChatMessageType[];
  currentUserId: number;
}

const MessageList: React.FC<MessageListProps> = ({
  messages,
  currentUserId,
}) => {
  if (!messages || messages.length === 0) {
    return (
      <div className='flex items-center justify-center h-full'>
        <div className='text-center p-8 text-gray-500'>
          <div className='text-6xl mb-4'>💬</div>
          <p>Nenhuma mensagem ainda, seja o primeiro a enviar uma!</p>
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col space-y-3 p-4'>
      {messages.map((message, index) => (
        <div
          key={message.id || index}
          className={`${
            message.user.id === currentUserId
              ? 'self-end bg-gray-800 border-gray-700'
              : 'self-start bg-gray-900 border-gray-800'
          } border rounded-lg`}>
          <ChatMessage message={message} />
        </div>
      ))}
    </div>
  );
};

export default MessageList;
