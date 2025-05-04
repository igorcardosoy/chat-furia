import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import ChatRoom from '../components/chat/ChatRoom';
import Layout from '../components/layout/Layout';
import { AuthContext } from '../contexts/AuthContext';

const Home = () => {
  const authContext = useContext(AuthContext);
  const user = authContext?.user;
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  return (
    <Layout>
      <h1>Welcome to the Chat Application</h1>
      {user ? <ChatRoom /> : <p>Please log in to access the chat.</p>}
    </Layout>
  );
};

export default Home;
