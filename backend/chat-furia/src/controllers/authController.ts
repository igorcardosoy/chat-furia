import { Request, Response } from 'express';
import { UserService } from '../services/userService';

const userService = new UserService();

class AuthController {
    async register(req: Request, res: Response): Promise<void> {
        try {
            const user = await userService.createUser(req.body);
            res.status(201).json({ message: 'User registered successfully', user });
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
            res.status(400).json({ message: errorMessage });
        }
    }

    async login(req: Request, res: Response): Promise<void> {
        try {
            const { email, password } = req.body;
            const token = await userService.authenticateUser(email, password);
            res.status(200).json({ message: 'Login successful', token });
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
            res.status(401).json({ message: errorMessage });
        }
    }
}

export default new AuthController();  