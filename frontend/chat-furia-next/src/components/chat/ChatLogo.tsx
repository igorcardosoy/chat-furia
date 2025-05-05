import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ChatLogoProps {
  svgLogo: string;
  chatName: string;
  chatId: string;
}

const ChatLogo = ({ svgLogo, chatName, chatId }: ChatLogoProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/chat/${chatId}`);
  };

  return (
    <a onClick={handleClick}>
      <div className='flex items-center gap-3 p-3 rounded-md transition-all hover:bg-gray-800 cursor-pointer border border-transparent hover:border-amber-600'>
        <div className='flex-shrink-0 bg-gray-800 p-2 rounded'>
          <Image
            src={svgLogo}
            alt='Chat Logo'
            width={28}
            height={28}
            className='w-7 h-7 '
          />
        </div>
        <span className='text-md font-medium text-gray-200'>{chatName}</span>
      </div>
    </a>
  );
};

export default ChatLogo;
