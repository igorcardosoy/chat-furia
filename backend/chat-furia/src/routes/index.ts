import { Router } from 'express';
import authRoutes from './auth';
import chatRoutes from './chat';
import userRoutes from './user';

const router = Router();

// Definindo as rotas
router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/chat', chatRoutes);

// Rota padrão
router.get('/', (req, res) => {
  res.status(200).json({ message: 'API is running' });
});

export default router;
