import { Server } from 'http';
import { Server as SocketServer } from 'socket.io';
import { getMessagesByChatId, saveMessage } from '../services/messageService';

const setupSocket = (server: Server) => {
  const io = new SocketServer(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  /*   userService.createUser({
    id: 123,
    username: 'igor',
    email: 'igor@',
    password: '',
    role: 'user',
  });

  userService.createUser({
    id: 321,
    username: 'jorgegin',
    email: 'jorgegin@',
    password: '',
    role: 'user',
  });

  chatService.createChat(); */

  io.on('connection', socket => {
    console.log('A user connected');

    // Implementação do join em salas de chat específicas
    socket.on('joinChat', async (chatId: string) => {
      socket.join(chatId);
      console.log(`User joined chat ${chatId}`);

      try {
        const messages = await getMessagesByChatId(parseInt(chatId));
        socket.emit('chatHistory', messages);
      } catch (error) {
        console.error(`Error retrieving chat history for ${chatId}:`, error);
        socket.emit('error', { message: 'Failed to load chat history' });
      }
    });

    socket.on(
      'sendMessage',
      async (message: {
        chatId: number;
        content: string;
        userId: number;
        username: string;
      }) => {
        try {
          const savedMessage = await saveMessage(
            message.content,
            message.userId,
            message.chatId
          );

          // Adiciona o username ao objeto da mensagem
          /* savedMessage.username = message.username */
          const messageToSend = savedMessage.get({ plain: true });
          messageToSend.username = message.username;

          io.to(String(message.chatId)).emit('receiveMessage', messageToSend);
        } catch (error) {
          console.error('Error processing message:', error);
          socket.emit('error', { message: 'Failed to send message' });
        }
      }
    );

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

  return io;
};

export default setupSocket;
