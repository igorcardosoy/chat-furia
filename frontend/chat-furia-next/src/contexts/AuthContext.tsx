'use client';

import { AuthResponse } from '@/types/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import * as authService from '../services/authService';

interface AuthContextType {
  user: AuthResponse | null;
  login: (email: string, password: string) => Promise<void>;
  checkUser: () => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<AuthResponse | null>>;
  logout: () => Promise<void>;
  register: (
    username: string,
    email: string,
    password: string
  ) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<AuthResponse | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = user;
      setUser(currentUser);
    };

    fetchUser();
  }, []);

  const checkUser = async () => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
    }
  };

  const login = async (email: string, password: string) => {
    const loggedInUser: AuthResponse = await authService.login(email, password);
    localStorage.setItem('user', JSON.stringify(loggedInUser));
    setUser(loggedInUser);
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
  };

  const register = async (
    username: string,
    email: string,
    password: string
  ) => {
    const newUser = await authService.register(username, email, password);
    setUser(newUser);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, setUser, checkUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
