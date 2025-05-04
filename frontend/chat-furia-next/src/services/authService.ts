import { AuthResponse } from '@/types/auth';
import axios from 'axios';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/auth`;

export const login = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

export const register = async (
  username: string,
  email: string,
  password: string
) => {
  const response = await axios.post(`${API_URL}/register`, {
    username,
    email,
    password,
  });
  return response.data;
};

export const logout = async () => {
  localStorage.removeItem('user');
};
