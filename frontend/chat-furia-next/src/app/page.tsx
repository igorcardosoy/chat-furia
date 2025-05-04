import Link from 'next/link';
import styles from './styles/Home.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Bem-vindo ao Chat Furia</h1>
      <p className={styles.description}>Uma plataforma de chat em tempo real</p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Login</h2>
          <p>Acesse sua conta para começar a conversar</p>
          <Link href='/home/login'>Entrar</Link>
        </div>

        <div className={styles.card}>
          <h2>Cadastro</h2>
          <p>Crie uma nova conta</p>
          <Link href='/home/register'>Cadastrar</Link>
        </div>
      </div>
    </main>
  );
}
