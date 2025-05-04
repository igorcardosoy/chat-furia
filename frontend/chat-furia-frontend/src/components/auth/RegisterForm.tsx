import { RegisterCredentials } from '@/types/auth';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import * as authService from '../../services/authService';
import Button from '../ui/Button';
import Input from '../ui/Input';

interface RegisterFormProps {
  onRegister: (userData: RegisterCredentials) => Promise<void>;
}

const RegisterForm = ({ onRegister }: RegisterFormProps) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await authService.register(username, email, password);
      router.push('/login'); // Redirect to login after successful registration
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      {error && <p className='error'>{error}</p>}
      <Input
        type='text'
        placeholder='Username'
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
      />
      <Input
        type='email'
        placeholder='Email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <Input
        type='password'
        placeholder='Password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <Button onClick={handleSubmit}>Register</Button>
    </form>
  );
};

export default RegisterForm;
