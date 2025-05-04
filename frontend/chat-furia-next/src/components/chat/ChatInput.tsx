'use client';

import { useState } from 'react';

interface ChatInputProps {
  onSendMessage: (content: string) => void;
  disabled?: boolean;
}

const ChatInput = ({ onSendMessage, disabled }: ChatInputProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex items-center p-4'>
      <input
        type='text'
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder='Type a message...'
        className='flex-grow p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500'
        disabled={disabled}
      />
      <button
        type='submit'
        disabled={!message.trim() || disabled}
        className='bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600 disabled:bg-gray-300'>
        Send
      </button>
    </form>
  );
};

export default ChatInput;
