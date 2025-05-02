import { Request, Response } from 'express';
import chatService from '../services/chatService';

class ChatController {
  async sendMessage(req: Request, res: Response) {
    try {
      const { chatId, userId, content } = req.body;
      const message = await chatService.sendMessage(chatId, {
        senderId: userId,
        content,
      });
      res.status(201).json(message);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao enviar mensagem' });
    }
  }

  async getMessages(req: Request, res: Response) {
    try {
      const { chatId } = req.params;
      const messages = await chatService.getMessages(chatId);
      res.status(200).json(messages);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao recuperar mensagens' });
    }
  }
}

export default new ChatController();
