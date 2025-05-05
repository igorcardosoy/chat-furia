'use client';

import { useState } from 'react';
import Button from '../ui/Button';

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
      className='w-full space-y-4'>
      <div className='mb-4'>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-gray-300 mb-1'>
          Email
        </label>
        <input
          id='email'
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          className='w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-white'
          disabled={isSubmitting}
          required
        />
      </div>

      <div className='mb-6'>
        <label
          htmlFor='password'
          className='block text-sm font-medium text-gray-300 mb-1'>
          Senha
        </label>
        <input
          id='password'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          className='w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-white'
          disabled={isSubmitting}
          required
        />
      </div>

      <Button
        type='submit'
        disabled={isSubmitting}
        fullWidth={true}
        variant='primary'>
        {isSubmitting ? 'Logging in...' : 'Login'}
      </Button>
    </form>
  );
};

export default LoginForm;
