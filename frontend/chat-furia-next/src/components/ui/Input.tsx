import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
  label,
  error,
  fullWidth = false,
  ...props
}) => {
  const widthClass = fullWidth ? 'w-full' : '';
  const errorClass = error
    ? 'border-amber-400 focus:ring-amber-400'
    : 'border-gray-700 focus:ring-amber-400';

  return (
    <div className={`${widthClass} mb-3`}>
      {label && (
        <label className='block text-gray-300 mb-1 text-sm font-medium'>
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`bg-gray-900 text-white rounded border ${errorClass} p-2 w-full focus:outline-none focus:ring-2 ${className}`}
        {...props}
      />
      {error && <p className='mt-1 text-sm text-amber-400'>{error}</p>}
    </div>
  );
};

export default Input;
