import React from 'react';
import { Message } from '../../types/chat';

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((message) => (
        <div key={message.id} className="message">
          <strong>Usuário {message.userId}:</strong> {message.content}
        </div>
      ))}
    </div>
  );
};

export default MessageList;