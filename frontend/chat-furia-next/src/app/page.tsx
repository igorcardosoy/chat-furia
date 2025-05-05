import Image from 'next/image';
import Link from 'next/link';
import FuriaLogo from '../../public/furia.svg';

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col items-center justify-center p-6 bg-black text-white'>
      <div className='max-w-4xl w-full text-center'>
        <div className='mb-8 flex flex-col items-center'>
          <Image
            src={FuriaLogo}
            alt='Furia Logo'
            width={120}
            height={120}
            className='mb-6'
          />
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>
            <span className='text-amber-400'>FURIA</span> Chat
          </h1>
          <p className='text-xl text-gray-400 mb-8 max-w-2xl'>
            A plataforma oficial de chat em tempo real para fãs da FURIA
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-6 max-w-2xl mx-auto'>
          <Link href='/login'>
            <div className='bg-gray-900 border border-gray-800 hover:border-red-600 p-8 rounded-lg transition-all hover:transform hover:-translate-y-1 cursor-pointer'>
              <h2 className='text-2xl font-bold mb-2'>Login</h2>
              <p className='text-gray-400 mb-4'>
                Acesse sua conta para começar a conversar
              </p>
              <div className='inline-block bg-red-600 text-white px-6 py-2 rounded-md'>
                Entrar
              </div>
            </div>
          </Link>

          <Link href='/register'>
            <div className='bg-gray-900 border border-gray-800 hover:border-red-600 p-8 rounded-lg transition-all hover:transform hover:-translate-y-1 cursor-pointer'>
              <h2 className='text-2xl font-bold mb-2'>Cadastro</h2>
              <p className='text-gray-400 mb-4'>Crie uma nova conta</p>
              <div className='inline-block bg-red-600 text-white px-6 py-2 rounded-md'>
                Cadastrar
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
