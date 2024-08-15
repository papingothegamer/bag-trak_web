import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-customBlue text-white py-2 px-4 rounded font-inter font-semibold hover:bg-blue-700 transition-colors ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
