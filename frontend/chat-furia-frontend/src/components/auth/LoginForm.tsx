import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Input from '../ui/Input';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authContext = useContext(AuthContext);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!authContext?.login) {
        throw new Error('Authentication context is not available');
      }
      await authContext.login(email, password);
      router.push('/chat'); // Redirect to chat page after successful login
    } catch (error) {
      console.error('Login failed:', error);
      // Handle error (e.g., show a notification)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
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
      <button type='submit'>Login</button>
    </form>
  );
};

export default LoginForm;
