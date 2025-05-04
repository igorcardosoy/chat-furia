// filepath: /chat-furia-frontend/chat-furia-frontend/src/components/chat/ChatRoom.tsx
import React, { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { ChatContext } from '../../contexts/ChatContext';
import ChatInput from './ChatInput';
import MessageList from './MessageList';

const ChatRoom: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { joinChat, messages } = useContext(ChatContext);

  useEffect(() => {
    if (id) {
      joinChat(id as string);
    }
  }, [id, joinChat]);

  return (
    <div className="chat-room">
      <h2>Chat Room: {id}</h2>
      <MessageList messages={messages} />
      <ChatInput chatId={id as string} />
    </div>
  );
};

export default ChatRoom;