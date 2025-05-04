import React from 'react';

import Image from 'next/image';
import FuriaLogo from '../../../public/furia.svg';
import ChatLogo from '../chat/ChatLogo';

import ChessLogo from '../../../public/chess.svg';
import CS2Logo from '../../../public/cs2.svg';
import RLLogo from '../../../public/rl.svg';
import ValorantLogo from '../../../public/valorant.svg';

const Sidebar: React.FC = () => {
  return (
    <aside className='sidebar bg-black text-white p-4'>
      <div className='logo'>
        <Image
          src={FuriaLogo}
          alt='Furia Logo'
          width={100}
          height={100}
          className='w-16 h-16 mb-4'
        />
      </div>
      <h2 className='text-xl font-bold text-gray-100 mb-4'>Chats</h2>
      <nav>
        <ul>
          <li>
            <ChatLogo chatName='Valorant' svgLogo={ValorantLogo} />
          </li>
          <li>
            <ChatLogo chatName='CS2' svgLogo={CS2Logo} />
          </li>
          <li>
            <ChatLogo chatName='RL' svgLogo={RLLogo} />
          </li>
          <li>
            <ChatLogo chatName='Xadrez' svgLogo={ChessLogo} />
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
