'use client';

import { useParams } from 'next/navigation';
import ChatRoom from '../../../../components/chat/ChatRoom';

const ChatPage = () => {
  const params = useParams();
  const id = params.id;

  return <ChatRoom chatId={id as string} />;
};

export default ChatPage;
