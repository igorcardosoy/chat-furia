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
    return <div className='text-center p-4 text-gray-500'>No messages yet</div>;
  }

  return (
    <div className='flex flex-col space-y-2'>
      {messages.map((message, index) => (
        <div
          key={message.id || index}
          className={`${
            message.user.id === currentUserId
              ? 'self-end bg-blue-100'
              : 'self-start bg-gray-100'
          }`}>
          <ChatMessage message={message} />
        </div>
      ))}
    </div>
  );
};

export default MessageList;
