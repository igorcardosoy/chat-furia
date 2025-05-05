import Message from '../models/Message';
import User from '../models/User';

export const saveMessage = async (
  content: string,
  userId: number,
  chatId: number
) => {
  try {
    const message = await Message.create({
      content,
      userId,
      chatId,
    });

    return await Message.findByPk(message.id, {
      include: [
        {
          model: User,
          as: 'sender',
          attributes: ['id', 'username', 'email'],
        },
      ],
    });
  } catch (error) {
    console.error('Error saving message:', error);
    throw error;
  }
};

export const getMessagesByChatId = async (chatId: number) => {
  try {
    const messages = await Message.findAll({
      attributes: ['id', 'content', 'createdAt'],
      where: { chatId },
      include: [
        {
          model: User,
          as: 'sender',
          attributes: ['id', 'username', 'email'],
        },
      ],
      order: [['createdAt', 'ASC']],
      limit: 50,
    });

    return messages;
  } catch (error) {
    console.error('Error retrieving messages:', error);
    throw error;
  }
};
