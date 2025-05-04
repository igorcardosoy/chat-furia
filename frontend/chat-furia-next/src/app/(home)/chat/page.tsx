'use client';

import ChatInput from '@/components/chat/ChatInput';
import MessageList from '@/components/chat/MessageList';
import { useSearchParams } from 'next/navigation';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import useChat from '../../../hooks/useChat';

const ChatPage = () => {
  const authContext = useContext(AuthContext);
  const user = authContext?.user?.user;
  const searchParams = useSearchParams();
  const chatId = searchParams.get('id') || '1';

  const { messages, loading, sendMessage } = useChat(chatId);

  if (!user) {
    return <div className='p-4'>Please log in to access the chat.</div>;
  }

  return (
    <div className='flex flex-col h-screen'>
      <div className='bg-gray-100 p-4 border-b'>
        <h1 className='text-xl font-bold'>Chat Room: {chatId}</h1>
      </div>

      <div className='flex justify-end p-2'>
        <button
          className='bg-red-500 text-white px-4 py-2 rounded'
          onClick={() =>
            authContext?.logout().then(() => {
              window.location.href = '/login';
            })
          }>
          Logout
        </button>
      </div>

      <div className='flex-grow overflow-auto p-4'>
        {loading ? (
          <div className='text-center p-4'>Loading messages...</div>
        ) : (
          <MessageList messages={messages} currentUserId={user.id} />
        )}
      </div>

      <div className='border-t'>
        <ChatInput
          onSendMessage={content => sendMessage(content, user)}
          disabled={loading}
        />
      </div>
    </div>
  );
};

export default ChatPage;
