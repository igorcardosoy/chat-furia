'use client';

import { RegisterCredentials } from '@/types/auth';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import Button from '../ui/Button';

interface RegisterFormProps {
  onRegister: (credentials: RegisterCredentials) => void;
}

const RegisterForm = ({ onRegister }: RegisterFormProps) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onRegister({ username, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className='w-full max-w-md space-y-4'>
      <div className='mb-4'>
        <label
          htmlFor='username'
          className='block text-sm font-medium text-gray-300 mb-1'>
          Username
        </label>
        <input
          id='username'
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
          className='w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-white'
          required
        />
      </div>

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
          required
        />
      </div>

      <Button type='submit' fullWidth={true} variant='primary'>
        Register
      </Button>

      <p className='mt-4 text-center text-gray-300'>
        Already have an account?{' '}
        <Link href='/login' className='text-amber-400 hover:underline'>
          Login here
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
