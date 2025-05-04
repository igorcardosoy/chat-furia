import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-600`}>
      {children}
    </button>
  );
};

export default Button;
