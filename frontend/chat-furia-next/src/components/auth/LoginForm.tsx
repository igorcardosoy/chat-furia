'use client';

import { useState } from 'react';

interface LoginFormProps {
  onSubmit: (e: React.FormEvent, email: string, password: string) => void;
  isSubmitting?: boolean;
}

const LoginForm = ({ onSubmit, isSubmitting = false }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form
      onSubmit={e => onSubmit(e, email, password)}
      className='w-full max-w-md'>
      <div className='mb-4'>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-gray-700 mb-1'>
          Email
        </label>
        <input
          id='email'
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500'
          disabled={isSubmitting}
          required
        />
      </div>

      <div className='mb-6'>
        <label
          htmlFor='password'
          className='block text-sm font-medium text-gray-700 mb-1'>
          Password
        </label>
        <input
          id='password'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500'
          disabled={isSubmitting}
          required
        />
      </div>

      <button
        type='submit'
        disabled={isSubmitting}
        className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300'>
        {isSubmitting ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};

export default LoginForm;
