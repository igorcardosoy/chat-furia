import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { ChatContext } from '../../contexts/ChatContext';
import { AuthContext } from '../../contexts/AuthContext';
import ChatRoom from '../../components/chat/ChatRoom';
import MessageList from '../../components/chat/MessageList';
import ChatInput from '../../components/chat/ChatInput';

const ChatPage = () => {
  const { user } = useContext(AuthContext);
  const { chatId } = useRouter().query;
  const { messages, fetchMessages } = useContext(ChatContext);

  useEffect(() => {
    if (chatId) {
      fetchMessages(chatId);
    }
  }, [chatId, fetchMessages]);

  if (!user) {
    return <div>Please log in to access the chat.</div>;
  }

  return (
    <div>
      <h1>Chat Room</h1>
      <MessageList messages={messages} />
      <ChatInput chatId={chatId} />
    </div>
  );
};

export default ChatPage;