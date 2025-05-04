'use client';

import { RegisterCredentials } from '@/types/auth';
import Link from 'next/link';
import { FormEvent, useState } from 'react';

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
    <form onSubmit={handleSubmit} className='w-full max-w-md'>
      <div className='mb-4'>
        <label htmlFor='username' className='block text-sm font-medium mb-1'>
          Username
        </label>
        <input
          id='username'
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
          className='w-full p-2 border rounded'
          required
        />
      </div>

      <div className='mb-4'>
        <label htmlFor='email' className='block text-sm font-medium mb-1'>
          Email
        </label>
        <input
          id='email'
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          className='w-full p-2 border rounded'
          required
        />
      </div>

      <div className='mb-6'>
        <label htmlFor='password' className='block text-sm font-medium mb-1'>
          Password
        </label>
        <input
          id='password'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          className='w-full p-2 border rounded'
          required
        />
      </div>

      <button
        type='submit'
        className='w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700'>
        Register
      </button>

      <p className='mt-4 text-center'>
        Already have an account?{' '}
        <Link href='/login' className='text-blue-600 hover:underline'>
          Login here
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
