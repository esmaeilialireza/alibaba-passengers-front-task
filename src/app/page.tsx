import Form from '@/modules/form';

export default function Home() {
  return (
    <div className="w-full h-full mx-auto flex justify-center items-center bg-gray-100">
      <div className="container bg-white p-4">
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M16 17v2H2v-2s0-4 7-4s7 4 7 4m-3.5-9.5A3.5 3.5 0 1 0 9 11a3.5 3.5 0 0 0 3.5-3.5m3.44 5.5A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4M15 4a3.4 3.4 0 0 0-1.93.59a5 5 0 0 1 0 5.82A3.4 3.4 0 0 0 15 11a3.5 3.5 0 0 0 0-7"
            />
          </svg>
          <p>مشخصات مسافران</p>
        </div>

        <div className="flex justify-between items-center mt-8">
          <p className="rounded-3xl border-[1px] text-gray-500 px-3 py-[2px]">
            بزرگسال
          </p>
          <button className="flex gap-1 items-center text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1"
              />
            </svg>
            <p>مسافران سابق</p>
          </button>
        </div>
        <Form className="mt-6" />
      </div>
    </div>
  );
}
