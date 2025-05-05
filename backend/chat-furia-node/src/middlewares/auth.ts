import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

interface JwtPayload {
  [key: string]: any;
}

const secretKey = process.env.JWT_SECRET || 'your_secret_key';

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'Token não fornecido' });
    return;
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      res.status(403).json({ message: 'Token inválido' });
      return;
    }

    req.user = decoded as JwtPayload;
    next();
  });
};

export const validateLogin = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: 'Email e senha são obrigatórios' });
    return;
  }

  next();
};

export const validateRegistration = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400).json({ message: 'Nome, email e senha são obrigatórios' });
    return;
  }

  next();
};
