// filepath: /chat-furia-frontend/chat-furia-frontend/src/pages/chat/[id].tsx
import { useRouter } from 'next/router';
import { useState } from 'react';
import ChatRoom from '../../../components/chat/ChatRoom';
import useChat from '../../../hooks/useChat';

const ChatPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { messages } = useChat(id as string);
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Chat Room: {id}</h1>
      <ChatRoom messages={messages} />
    </div>
  );
};

export default ChatPage;
