import { Router } from 'express';
import userController from '../controllers/userController';
import { authenticate } from '../middlewares/auth';

const router = Router();

/**
 * @route GET /users/:id
 * @desc Fetch user profile by ID
 * @access Private
 */
router.get('/:id', authenticate, userController.getUserProfile);

/**
 * @route PUT /users/:id
 * @desc Update user profile by ID
 * @access Private
 */
router.put('/:id', authenticate, userController.updateUserProfile);

export default router;
