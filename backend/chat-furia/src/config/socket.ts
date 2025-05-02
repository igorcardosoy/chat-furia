import { Express } from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const setupSocket = (app: Express) => {
  const server = createServer(app);
  const io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', socket => {
    console.log('A user connected');

    // Implementação do join em salas de chat específicas
    socket.on('joinChat', (chatId: string) => {
      socket.join(chatId);
      console.log(`User joined chat ${chatId}`);
    });

    // Enviar mensagem apenas para usuários na mesma sala
    socket.on(
      'sendMessage',
      (message: { chatId: string; content: string; userId: string }) => {
        io.to(message.chatId).emit('receiveMessage', message);
      }
    );

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

  return server;
};

export default setupSocket;
