'use client';

import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import { AuthContext } from '../../contexts/AuthContext';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const authContext = useContext(AuthContext);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (authContext?.checkUser) {
          await authContext.checkUser();
        }

        if (!authContext?.user) {
          router.push('/login');
        }
      } catch (error) {
        console.error('Authentication failed:', error);
        router.push('/login');
        return;
      }
    };

    checkAuth();
  }, []);

  return (
    <div className='flex h-screen overflow-hidden bg-gray-100'>
      <Sidebar />
      <div className='flex flex-col flex-1 overflow-hidden'>
        <Header />
        <main className='flex-1 overflow-auto p-4'>{children}</main>
      </div>
    </div>
  );
}
