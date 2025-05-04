import { RegisterCredentials } from '@/types/auth';
import { useRouter } from 'next/router';
import { useState } from 'react';
import RegisterForm from '../components/auth/RegisterForm';
import { register as registerUser } from '../services/authService';

const RegisterPage = () => {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async (userData: RegisterCredentials) => {
    try {
      await registerUser(userData.username, userData.email, userData.password);
      router.push('/login');
    } catch (err: Error | any) {
      setError(err.message);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-2xl font-bold mb-4'>Register</h1>
      {error && <p className='text-red-500'>{error}</p>}
      <RegisterForm onRegister={handleRegister} />
    </div>
  );
};

export default RegisterPage;
