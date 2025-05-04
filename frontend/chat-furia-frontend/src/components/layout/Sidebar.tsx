import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <h2>Chat Furia</h2>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
          <li>
            <Link href="/chat">Chat Rooms</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;