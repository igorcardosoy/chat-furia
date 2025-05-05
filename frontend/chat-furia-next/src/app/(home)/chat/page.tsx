'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ChatPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/chat/1');
  });

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-4'>
      <h1 className='text-2xl font-bold mb-4'>Chat</h1>
      <p className='text-gray-500'>Redirecionando para o chat default...</p>
    </div>
  );
};

export default ChatPage;
