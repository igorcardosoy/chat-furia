import { AuthContext } from '@/contexts/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const authContext = React.useContext(AuthContext);
  const router = useRouter();

  return (
    <header className='bg-black text-white border-b border-gray-800 shadow-lg'>
      <div className='container mx-auto flex justify-between items-center px-4 py-3'>
        <h1 className='text-xl font-bold text-white flex items-center'>
          <Link href='/' className='flex items-center'>
            <span className='text-amber-400 mr-2'>FURIA</span>
            <span>Chat</span>
          </Link>
        </h1>
        <nav>
          <ul className='flex space-x-4'>
            <div className='flex justify-end'>
              <Button
                variant='secondary'
                size='sm'
                onClick={() =>
                  authContext?.logout().then(() => {
                    router.push('/login');
                  })
                }>
                Logout
              </Button>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
