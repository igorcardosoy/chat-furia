import Image from 'next/image';

interface ChatLogoProps {
  svgLogo: string;
  chatName: string;
}

const ChatLogo = ({ svgLogo, chatName }: ChatLogoProps) => {
  return (
    <div className='flex items-center gap-2 p-2 rounded hover:bg-gray-700 cursor-pointer'>
      <Image
        src={svgLogo}
        alt='Chat Logo'
        width={40}
        height={40}
        className='h-8 w-8 rounded bg-gray-200'
      />
      <span className='text-l font-bold text-gray-100'>{chatName}</span>
    </div>
  );
};
export default ChatLogo;
