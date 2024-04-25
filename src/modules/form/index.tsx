'use client';

import React, { FC, HTMLProps } from 'react';
import { useForm, useFieldArray, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { FormData } from '@/types';

import FormItem from './formItem';
import formSchema from './zod-schema';

interface FormProps extends HTMLProps<HTMLFormElement> {}

const Form: FC<FormProps> = ({ className, ...props }) => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fields: [
        {
          firstName: '',
          lastName: '',
          gender: '',
          nationalCode: '',
          birth: null,
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'fields',
    keyName: 'id',
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit} className={className} {...props}>
        {fields.map((field, index) => (
          <FormItem
            field={field}
            key={field.id}
            index={index}
            remove={() => remove(index)}
            className={index > 0 ? 'mt-8' : ''}
          />
        ))}
        <hr className="mt-10 mb-6" />
        <div className="flex gap-2">
          <button
            className="flex items-center text-blue-500 border-2 border-blue-500 rounded-md py-1 px-2"
            type="button"
            onClick={() =>
              append({
                birth: null,
                firstName: '',
                gender: '',
                lastName: '',
                nationalCode: '',
              })
            }>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M18 12h-6m0 0H6m6 0V6m0 6v6"
              />
            </svg>
            <p>اضافه کردن مسافر جدید</p>
          </button>
          <button
            className="text-blue-500 font-semibold rounded-md py-1 px-2"
            type="submit"
            onClick={onSubmit}>
            ثبت
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
