import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { CreationAttributes } from 'sequelize';
import User from '../models/User';
import { UserProfile as UserType } from '../types/user';
import { logError } from '../utils/logger';

interface UserAuthResponse {
  token: string;
  user: UserType;
}

class UserService {
  deleteUser(userId: string) {
    return User.destroy({
      where: { id: userId },
    });
  }

  updateUser(userId: string, updatedData: any) {
    return User.update(updatedData, {
      where: { id: userId },
    });
  }

  getUserById(userId: string) {
    return User.findByPk(userId);
  }

  async createUser(userData: CreationAttributes<User>): Promise<User> {
    try {
      if (userData.password) {
        userData.password = await bcrypt.hash(userData.password, 10);
      }

      const user = await User.create(userData);

      return user;
    } catch (error) {
      console.log(`Erro ao criar usuário: ${String(error)}`);
      throw error;
    }
  }

  async authenticateUser(
    email: string,
    password: string
  ): Promise<UserAuthResponse | null> {
    try {
      const user = await User.findOne({ where: { email } });

      // Verifica se o usuário existe e se a senha está correta
      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign(
          {
            id: user.id,
            email: user.email,
            name: user.username,
          },
          process.env.JWT_SECRET || 'sua_chave_secreta',
          { expiresIn: '24h' }
        );

        return {
          token,
          user: {
            id: user.id,
            email: user.email,
            username: user.username,
          },
        };
      }

      throw new Error('Email ou senha inválidos');
    } catch (error) {
      logError(
        `Erro na autenticação: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
      throw error;
    }
  }
}

export default new UserService();
