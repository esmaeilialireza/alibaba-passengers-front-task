import clsx from 'clsx';
import React, { FC, HTMLProps } from 'react';

export interface SelectProps extends HTMLProps<HTMLSelectElement> {
  options: {
    label: string;
    value: string;
  }[];
  placeholder?: string;
}

const Select: FC<SelectProps> = ({
  options = [],
  className,
  placeholder = 'انتخاب کنید',
  ...props
}) => {
  return (
    <div className="relative w-full h-full">
      <select
        className={clsx(
          'rounded-lg border w-full h-full text-gray-400 border-gray-200 px-3 py-2.5 font-normal transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 disabled:border-0 disabled:bg-blue-gray-50 outline-none appearance-none',
          className
        )}
        {...props}>
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option className="font-yekan" key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center px-2 text-gray-700">
        <svg
          className="w-4 h-4 fill-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20">
          <path d="M10 12l-5-5 1.5-1.5L10 9l3.5-3.5L15 7z" />
        </svg>
      </div>
    </div>
  );
};

export default Select;
