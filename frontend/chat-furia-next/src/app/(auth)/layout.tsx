'use client';

import { useRouter } from 'next/navigation';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const authContext = useContext(AuthContext);
  const user = authContext?.user;
  const [isLoading, setIsLoading] = useState(true);
  const redirectAttempted = useRef(false);

  useEffect(() => {
    const checkAuth = async () => {
      if (redirectAttempted.current) {
        return;
      }

      try {
        if (authContext?.checkUser) {
          await authContext.checkUser();
        }

        if (authContext?.user && !redirectAttempted.current) {
          redirectAttempted.current = true;
          router.push('/chat');
          return;
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [authContext, router]);

  if (isLoading) {
    return (
      <div className='flex items-center justify-center h-screen bg-black'>
        <div className='text-center'>
          <div className='w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto'></div>
          <p className='mt-4 text-gray-400'>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-black'>
      <div className='w-full max-w-md p-8 rounded-lg bg-black shadow-xl'>
        {children}
      </div>
    </div>
  );
}
