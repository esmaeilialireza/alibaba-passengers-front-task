import React, { FC, HTMLProps } from 'react';

import Input from '@/components/input';
import Select from '@/components/select';
import DatePicker from '@/components/date-picker';

export interface FormProps extends HTMLProps<HTMLFormElement> {}

const Form: FC<FormProps> = ({ className, ...props }) => {
  return (
    <form className={className} {...props}>
      <div className="w-full grid grid-cols-4 gap-4">
        <Input placeholder="نام فارسی" />
        <Input placeholder="نام خانوادگی فارسی" />
        <Select
          placeholder="جنسیت"
          options={[
            {
              label: 'مرد',
              value: 'male',
            },
            {
              label: 'زن',
              value: 'female',
            },
          ]}
        />
        <Input placeholder="کد ملی" type="number" />
        <DatePicker />
      </div>
      <hr className="mt-10 mb-6" />
      <button className="flex items-center text-blue-500 border-2 border-blue-500 rounded-md py-1 px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M18 12h-6m0 0H6m6 0V6m0 6v6"
          />
        </svg>
        <p>اضافه کردن مسافر جدید</p>{' '}
      </button>
    </form>
  );
};

export default Form;
