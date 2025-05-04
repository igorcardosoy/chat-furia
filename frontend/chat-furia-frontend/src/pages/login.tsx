import { useRouter } from 'next/router';
import { useState } from 'react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { login } from '../services/authService';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await login(email, password);
      router.push('/chat'); // Redirect to chat page after successful login
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-2xl font-bold mb-4'>Login</h1>
      {error && <p className='text-red-500'>{error}</p>}
      <form onSubmit={handleSubmit} className='w-80'>
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
        <Button
          type='submit'
          className='mt-4'
          onClick={() => {}}
          children={undefined}
        />
      </form>
      <p className='mt-4'>
        Don't have an account?{' '}
        <a href='/register' className='text-blue-500'>
          Register
        </a>
      </p>
    </div>
  );
};

export default LoginPage;
