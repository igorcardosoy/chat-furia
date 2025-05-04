import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className='bg-black text-white p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-xl font-bold'>
          <Link href='/'>Chat Furia</Link>
        </h1>
        <nav>
          <ul className='flex space-x-4'>
            <li>
              <Link href='/login'>Login</Link>
            </li>
            <li>
              <Link href='/register'>Register</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
