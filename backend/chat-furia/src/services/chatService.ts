import Chat from '../models/Chat';
import Message from '../models/Message';
import User from '../models/User';
import { logError } from '../utils/logger';

class ChatService {
  async getChatById(chatId: string) {
    const chat = await Chat.findByPk(chatId);
    if (!chat) {
      throw new Error('Chat não encontrado');
    }
    return chat;
  }

  async sendMessage(
    chatId: number,
    messageData: { senderId: string; content: string }
  ) {
    try {
      const chat = await Chat.findByPk(chatId);
      if (!chat) {
        throw new Error('Chat não encontrado');
      }

      const message = await Message.create({
        chatId,
        userId: Number(messageData.senderId),
        content: messageData.content,
      });

      const messageWithUser = await Message.findByPk(message.id, {
        include: [
          {
            model: User,
            as: 'sender',
            attributes: ['id', 'username', 'email'],
          },
        ],
      });

      return messageWithUser;
    } catch (error) {
      logError(
        `Erro ao enviar mensagem: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
      throw error;
    }
  }

  async getMessages(chatId: string) {
    const chat = await Chat.findByPk(chatId);
    if (!chat) {
      throw new Error('Chat não encontrado');
    }

    const messages = await Message.findAll({
      where: { chatId },
      order: [['createdAt', 'ASC']],
      include: [
        {
          model: User,
          as: 'sender',
          attributes: ['id', 'username', 'email'],
        },
      ],
    });

    return messages;
  }

  async addUserToChat(chatId: string, userId: string) {
    const chat = await Chat.findByPk(chatId);
    if (!chat) {
      throw new Error('Chat não encontrado');
    }

    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const chatData = chat.get({ plain: true });
    const users = chatData.users || [];

    if (!users.includes(userId)) {
      users.push(userId);
      await chat.update({ users });
    }

    return chat;
  }
}

export default new ChatService();
