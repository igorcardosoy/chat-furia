import { User } from '@/types/user';
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

  io.on('connection', socket => {
    console.log('A user connected');

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
      async (message: { chatId: number; content: string; user: User }) => {
        try {
          const savedMessage = await saveMessage(
            message.content,
            message.user.id,
            message.chatId
          );

          const emuittedMessage = {
            id: savedMessage?.id,
            chatId: message.chatId,
            user: {
              id: message.user.id,
              username: message.user.username,
              email: message.user.email,
            },
            content: message.content,
            createdAt: savedMessage?.createdAt,
            updatedAt: savedMessage?.updatedAt,
          };

          io.to(message.chatId.toString()).emit('newMessage', emuittedMessage);
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
