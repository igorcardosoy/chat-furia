'use client';

import { useState } from 'react';
import Button from '../ui/Button';

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
    <form
      onSubmit={handleSubmit}
      className='flex items-center p-4 bg-gray-900 border-t border-gray-800'>
      <input
        type='text'
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder='Type a message...'
        className='flex-grow p-3 bg-gray-800 border border-gray-700 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-400'
        disabled={disabled}
      />
      <Button
        type='submit'
        disabled={!message.trim() || disabled}
        className='rounded-l-none rounded-r-md'
        variant='primary'>
        Send
      </Button>
    </form>
  );
};

export default ChatInput;
