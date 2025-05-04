import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { login as loginService } from '../services/authService';

const useAuth = () => {
  const { setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const user = await loginService(email, password);
      setUser(user);
    } catch (err) {
      setError(err.message);
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