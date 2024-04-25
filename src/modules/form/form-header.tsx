import React from 'react';

import UserSvg from '@/components/svg/user-svg';
import UsersSvg from '@/components/svg/users-svg';

const FormHeader = () => {
  return (
    <>
      <div className="flex gap-2 items-center">
        <UsersSvg />
        <p>مشخصات مسافران</p>
      </div>

      <div className="flex justify-between items-center mt-8">
        <p className="rounded-3xl border-[1px] text-gray-500 px-3 py-[2px]">
          بزرگسال
        </p>
        <button className="flex gap-1 items-center text-blue-500">
          <UserSvg />
          <p>مسافران سابق</p>
        </button>
      </div>
    </>
  );
};

export default FormHeader;
