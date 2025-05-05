'use client';

import LoginForm from '@/components/auth/LoginForm';
import { AuthContext } from '@/contexts/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useContext, useState } from 'react';

const LoginPage = () => {
  const [error, setError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const router = useRouter();
  const authContext = useContext(AuthContext);

  const handleSubmit = useCallback(
    async (e: React.FormEvent, email: string, password: string) => {
      e.preventDefault();
      if (isLoggingIn) return;

      setIsLoggingIn(true);
      setError('');

      try {
        if (!authContext?.login) {
          throw new Error('Login function not available');
        }

        await authContext.login(email, password);
        router.push('/chat');
      } catch (err: unknown) {
        if (err instanceof Error) setError(err.message);
      } finally {
        setIsLoggingIn(false);
      }
    },
    [authContext, router, isLoggingIn]
  );

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-2xl font-bold mb-4'>Login</h1>

      {error && (
        <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4'>
          {error}
        </div>
      )}

      <LoginForm onSubmit={handleSubmit} isSubmitting={isLoggingIn} />

      <p className='mt-4'>
        Don`&apos;`t have an account?{' '}
        <Link href='/register' className='text-blue-500 hover:underline'>
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
