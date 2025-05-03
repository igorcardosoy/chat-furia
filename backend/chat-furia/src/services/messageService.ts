import Message from '../models/Message';
import User from '../models/User';

export const saveMessage = async (
  content: string,
  userId: number, // Alterado para number
  chatId: number // Alterado para number
) => {
  try {
    const message = await Message.create({
      content,
      userId,
      chatId,
    });
    return message;
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
          attributes: ['id', 'username'],
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
