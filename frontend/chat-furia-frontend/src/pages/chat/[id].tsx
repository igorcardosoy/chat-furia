// filepath: /chat-furia-frontend/chat-furia-frontend/src/pages/chat/[id].tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useChat } from '../../hooks/useChat';
import ChatRoom from '../../components/chat/ChatRoom';
import { ChatMessage } from '../../types/chat';

const ChatPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { messages, fetchMessages } = useChat(id as string);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchMessages(id as string).finally(() => setLoading(false));
    }
  }, [id, fetchMessages]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Chat Room: {id}</h1>
      <ChatRoom messages={messages as ChatMessage[]} />
    </div>
  );
};

export default ChatPage;