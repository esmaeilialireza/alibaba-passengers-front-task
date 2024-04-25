import clsx from 'clsx';
import React, { FC, HTMLProps } from 'react';

export interface InputProps extends HTMLProps<HTMLInputElement> {}

const Input: FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={clsx(
        'border-gray-200 border-[1px]	rounded-lg px-2 py-3',
        className
      )}
      {...props}
    />
  );
};

export default Input;
