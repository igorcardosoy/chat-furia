import { io } from 'socket.io-client';

export const socket = io(
  process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:3001',
  {
    autoConnect: true,
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
  }
);

// Optional: Add event listeners for connection status
socket.on('connect', () => {
  console.log('Connected to socket server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from socket server');
});

socket.on('connect_error', error => {
  console.error('Socket connection error:', error);
});
