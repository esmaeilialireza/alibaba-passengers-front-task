import { z } from 'zod';

const passengerSchema = z.object({
  firstName: z.string().min(1, { message: 'نام باید حداقل 2 کاراکتر باشد' }),
  lastName: z
    .string()
    .min(1, { message: 'نام خانوادگی باید حداقل 2 کاراکتر باشد' }),
  gender: z.string().min(1, { message: 'جنسیت الزامی میباشد' }),
  nationalCode: z.string().length(10, { message: 'کد ملی باید 10 رقم باشد' }),
  birth: z.date({ message: 'تاریخ تولد الزامی میباشد' }),
});

const formSchema = z.object({
  fields: z.array(passengerSchema),
});

export default formSchema;
