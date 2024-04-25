import { ChangeEvent, FC, HTMLProps } from 'react';
import clsx from 'clsx';
import { FieldArrayWithId, useFormContext } from 'react-hook-form';

import Input from '@/components/input';
import Select from '@/components/select';
import DatePicker from '@/components/date-picker';

import { FormData } from '@/types';

interface FormItemProps extends HTMLProps<HTMLDivElement> {
  index: number;
  remove: () => void;
  field: FieldArrayWithId<FormData>;
}

const FormItem: FC<FormItemProps> = ({
  index,
  remove,
  className,
  field,
  ...props
}) => {
  const { formState, setValue, watch } = useFormContext<FormData>();

  return (
    <div
      className={clsx('w-full grid grid-cols-4 gap-4', className)}
      {...props}>
      <div className="flex flex-col">
        <Input
          value={watch(`fields.${index}.firstName`)}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(`fields.${index}.firstName`, e.target.value)
          }
          placeholder="نام فارسی"
          className="h-12"
        />
        {formState.errors.fields?.[index] && (
          <span className="text-red-400 mt-2">
            {formState.errors.fields?.[index]?.firstName?.message}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <Input
          value={watch(`fields.${index}.lastName`)}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(`fields.${index}.lastName`, e.target.value)
          }
          placeholder="نام خانوادگی فارسی"
          className="h-12"
        />
        {formState.errors.fields?.[index] && (
          <span className="text-red-400 mt-2">
            {formState.errors.fields?.[index]?.lastName?.message}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <Select
          placeholder="جنسیت"
          className="h-12"
          options={[
            { label: 'مرد', value: 'male' },
            { label: 'زن', value: 'female' },
          ]}
          value={watch(`fields.${index}.gender`)}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setValue(`fields.${index}.gender`, e.target.value)
          }
        />
        {formState.errors.fields?.[index] && (
          <span className="text-red-400 mt-2">
            {formState.errors.fields?.[index]?.gender?.message}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <Input
          value={watch(`fields.${index}.nationalCode`)}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(`fields.${index}.nationalCode`, e.target.value)
          }
          placeholder="کد ملی"
          className="h-12"
          type="number"
        />
        {formState.errors.fields?.[index] && (
          <span className="text-red-400 mt-2">
            {formState.errors.fields?.[index]?.nationalCode?.message}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <p className="text-sm mb-1">تاریخ تولد</p>
        <DatePicker
          onChange={(date) => setValue(`fields.${index}.birth`, date)}
          value={watch(`fields.${index}.birth`)}
        />
        {formState.errors.fields?.[index] && (
          <span className="text-red-400 mt-2">
            {formState.errors.fields?.[index]?.birth?.message}
          </span>
        )}
      </div>

      {index !== 0 && (
        <button type="button" onClick={remove}>
          حذف
        </button>
      )}
    </div>
  );
};

export default FormItem;
