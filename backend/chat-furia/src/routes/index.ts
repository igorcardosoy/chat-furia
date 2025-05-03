import { Router } from 'express';
import authRoutes from './auth';
import userRoutes from './user';

const router = Router();

// Definindo as rotas
router.use('/auth', authRoutes);
router.use('/user', userRoutes);

export default router;
