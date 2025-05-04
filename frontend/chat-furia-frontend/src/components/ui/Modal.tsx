import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6">
        {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}
        <div>{children}</div>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white rounded px-4 py-2"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;