'use client';

import React, { FC, HTMLProps } from 'react';
import { useForm, useFieldArray, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import PlusSvg from '@/components/svg/plus-svg';
import { FormData } from '@/types';

import FormItem from './form-item';
import FormHeader from './form-header';
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
      <FormHeader />

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
            <PlusSvg />
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
