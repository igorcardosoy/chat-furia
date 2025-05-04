import React from 'react';
import { ChatMessage as ChatMessageType } from '../../types/chat';

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <div className='chat-message p-2 mb-2 rounded'>
      <strong>{message.user.username}:</strong> {message.content}
    </div>
  );
};

export default ChatMessage;
