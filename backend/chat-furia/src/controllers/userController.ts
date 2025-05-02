import { Request, Response } from 'express';
import { UserService } from '../services/userService';

const userService = new UserService();

class UserController {
    getUserProfile = async (req: Request, res: Response): Promise<void> => {
        try {
            const userId = req.params.id;
            const userProfile = await userService.getUserById(userId);

            if (!userProfile) {
                res.status(404).json({ message: 'Usuário não encontrado' });
                return;
            }

            res.status(200).json(userProfile);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar perfil do usuário', error });
        }
    };

    updateUserProfile = async (req: Request, res: Response): Promise<void> => {
        try {
            const userId = req.params.id;
            const updatedData = req.body;
            const updatedUser = await userService.updateUser(userId, updatedData);

            if (!updatedUser) {
                res.status(404).json({ message: 'Usuário não encontrado' });
                return;
            }

            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar perfil do usuário', error });
        }
    };

    deleteUser = async (req: Request, res: Response) => {
        try {
            const userId = req.params.id;
            const result = await userService.deleteUser(userId);

            if (!result) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao deletar usuário', error });
        }
    };
}

export default new UserController();