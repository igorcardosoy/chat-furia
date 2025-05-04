import React from 'react';
import { Message } from '../../types/chat';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <div className="chat-message">
      <strong>{message.userId}:</strong> {message.content}
    </div>
  );
};

export default ChatMessage;