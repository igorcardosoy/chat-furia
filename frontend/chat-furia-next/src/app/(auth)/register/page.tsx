'use client';

import { RegisterCredentials } from '@/types/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import RegisterForm from '../../../components/auth/RegisterForm';
import { register as registerUser } from '../../../services/authService';

const RegisterPage = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (userData: RegisterCredentials) => {
    setLoading(true);
    try {
      await registerUser(userData.username, userData.email, userData.password);
      router.push('/login');
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-4'>
      <h1 className='text-2xl font-bold mb-4'>Register</h1>
      {error && <p className='text-amber-400 mb-4'>{error}</p>}
      <RegisterForm onRegister={handleRegister} />
      {loading && <p className='mt-4'>Processing...</p>}
    </div>
  );
};

export default RegisterPage;
