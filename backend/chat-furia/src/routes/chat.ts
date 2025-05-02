import { Router } from 'express';
import chatController from '../controllers/chatController';

const router = Router();

/**
 * @route POST /chat/message
 * @desc Envia uma nova mensagem
 * @access Público
 * @body { "userId": "string", "chatId": "string", "content": "string" }
 */
router.post('/message', chatController.sendMessage);

/**
 * @route GET /chat/messages/:chatId
 * @desc Recupera mensagens de um chat específico
 * @access Público
 * @param {string} chatId - ID do chat
 */
router.get('/messages/:chatId', chatController.getMessages);

export default router;