import React from 'react';
import { ChatMessage } from '../../types/chat';

interface ChatRoomProps {
  messages: ChatMessage[];
}

const ChatRoom: React.FC<ChatRoomProps> = ({ messages }) => {
  return (
    <div className='chat-room'>
      {messages.map((message, index) => (
        <div key={index} className='message'>
          {message.content}
        </div>
      ))}
    </div>
  );
};

export default ChatRoom;
