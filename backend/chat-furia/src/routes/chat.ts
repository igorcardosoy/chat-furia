import { Router } from 'express';
import chatService from '../services/chatService';

const router = Router();

/**
 * @route GET /messages
 * @desc Fetch all messages for a specific chat
 */
router.get('/:chatId/messages', async (req, res) => {
  console.log('Fetching messages for chatId:', req.params.chatId);
  const { chatId } = req.params;
  try {
    const messages = await chatService.getMessages(chatId);
    res.status(200).json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
