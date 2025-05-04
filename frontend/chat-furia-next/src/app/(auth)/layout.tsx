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
      // Only proceed if we haven't already attempted to redirect
      if (redirectAttempted.current) {
        return;
      }

      try {
        if (authContext?.checkUser) {
          await authContext.checkUser();
        }

        // If user is authenticated and we haven't redirected yet
        if (authContext?.user && !redirectAttempted.current) {
          redirectAttempted.current = true; // Mark that we've attempted to redirect
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

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <div className='text-center'>
          <div className='w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto'></div>
          <p className='mt-4 text-gray-600'>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50'>
      <div className='w-full max-w-md p-8 bg-white rounded-lg shadow-md'>
        {children}
      </div>
    </div>
  );
}
