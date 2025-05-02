import { Router } from 'express';
import authController from '../controllers/authController';
import { validateLogin, validateRegistration } from '../middlewares/auth';

const router = Router();

/**
 * @route POST /auth/register
 * @desc Register a new user
 * @access Public
 * @body { "username": "string", "password": "string", "email": "string" }
 */
router.post('/register', validateRegistration, authController.register);

/**
 * @route POST /auth/login
 * @desc Login an existing user
 * @access Public
 * @body { "username": "string", "password": "string" }
 */
router.post('/login', validateLogin, authController.login);

export default router;