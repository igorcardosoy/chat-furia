import { Router } from 'express';
import authRoutes from './auth';
import chatRoutes from './chat';
import userRoutes from './user';

const router = Router();

// Definindo as rotas
router.use('/auth', authRoutes);
router.use('/chat', chatRoutes);
router.use('/user', userRoutes);

export default router;