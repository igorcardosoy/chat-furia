import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { login as loginService } from '../services/authService';

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  const { setUser } = context;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const user = await loginService(email, password);
      setUser(user);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return {
    login,
    logout,
    loading,
    error,
  };
};

export default useAuth;
