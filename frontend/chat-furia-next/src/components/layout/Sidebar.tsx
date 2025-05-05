import Image from 'next/image';
import React from 'react';
import FuriaLogo from '../../../public/furia.svg';
import ChatLogo from '../chat/ChatLogo';

import ChessLogo from '../../../public/chess.svg';
import CS2Logo from '../../../public/cs2.svg';
import RLLogo from '../../../public/rl.svg';
import ValorantLogo from '../../../public/valorant.svg';

const Sidebar: React.FC = () => {
  return (
    <aside className='sidebar bg-black text-white border-r border-gray-800 p-4 w-64'>
      <div className='logo flex justify-center mb-8'>
        <Image
          src={FuriaLogo}
          alt='Furia Logo'
          width={100}
          height={100}
          className='w-16 h-16'
        />
      </div>
      <h2 className='text-xl font-bold text-amber-400 mb-6 px-2'>Chats</h2>
      <nav>
        <ul className='space-y-2'>
          <li>
            <ChatLogo chatName='Geral' svgLogo={FuriaLogo} chatId='1' />
          </li>
          <li>
            <ChatLogo chatName='LoL' svgLogo={FuriaLogo} chatId='2' />
          </li>
          <li>
            <ChatLogo chatName='Valorant' svgLogo={ValorantLogo} chatId='3' />
          </li>
          <li>
            <ChatLogo chatName='CS2' svgLogo={CS2Logo} chatId='4' />
          </li>
          <li>
            <ChatLogo chatName='RL' svgLogo={RLLogo} chatId='5' />
          </li>
          <li>
            <ChatLogo chatName='Xadrez' svgLogo={ChessLogo} chatId='6' />
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
