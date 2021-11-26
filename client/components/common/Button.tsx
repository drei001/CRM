import React from 'react';

export type TButton = {
  text: string;
  color: string;
  size: string;
  hover: string;
  focus: string;
};

const Button = ({
  text,
  color = 'bg-green-500',
  size = 'text-sm',
  hover = 'bg-green-800',
  focus = 'ring-green-300',
}: TButton) => {
  return (
    <button
      type="button"
      className={`text-white ${color} hover:${hover} focus:ring-4 focus:${focus} font-medium rounded-lg ${size} px-5 py-2.5 text-center mr-3`}
    >
      {text}
    </button>
  );
};

export default Button;
