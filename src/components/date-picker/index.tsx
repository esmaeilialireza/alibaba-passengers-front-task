import React, { FC, useState, useEffect } from 'react';
import Select from '../select';

const days = Array.from({ length: 31 }, (_, index) => {
  const day = (index + 1).toString().padStart(2, '0');
  return { label: day, value: day };
});

const months: { label: string; value: string }[] = [
  { label: 'فروردین', value: '01' },
  { label: 'اردیبهشت', value: '02' },
  { label: 'خرداد', value: '03' },
  { label: 'تیر', value: '04' },
  { label: 'مرداد', value: '05' },
  { label: 'شهریور', value: '06' },
  { label: 'مهر', value: '07' },
  { label: 'آبان', value: '08' },
  { label: 'آذر', value: '09' },
  { label: 'دی', value: '10' },
  { label: 'بهمن', value: '11' },
  { label: 'اسفند', value: '12' },
];

const years = Array.from({ length: 1403 - 1350 + 1 }, (_, index) => {
  const year = (1350 + index).toString();
  const persianYear = year.padStart(4, '۰');
  return { label: persianYear, value: year };
});

interface DatePickerProps {
  value?: Date;
  onChange: (date: Date) => void;
}

const DatePicker: FC<DatePickerProps> = ({ onChange, value }) => {
  const [selectedDay, setSelectedDay] = useState<string>(
    value ? value.getDate().toString().padStart(2, '0') : ''
  );
  const [selectedMonth, setSelectedMonth] = useState<string>(
    value ? (value.getMonth() + 1).toString().padStart(2, '0') : ''
  );
  const [selectedYear, setSelectedYear] = useState<string>(
    value ? value.getFullYear().toString() : ''
  );

  useEffect(() => {
    if (selectedDay && selectedMonth && selectedYear) {
      const newDate = new Date(
        parseInt(selectedYear, 10),
        parseInt(selectedMonth, 10) - 1,
        parseInt(selectedDay, 10)
      );
      onChange(newDate);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDay, selectedMonth, selectedYear]);

  return (
    <div className="flex">
      <Select
        placeholder="روز"
        className="flex-1 rounded-s-lg rounded-e-none"
        value={selectedDay}
        onChange={(selectedValue) => setSelectedDay(selectedValue.target.value)}
        options={days}
      />
      <Select
        placeholder="ماه"
        className="flex-[2] rounded-s-none rounded-e-none border-e-0 border-s-0"
        value={selectedMonth}
        onChange={(selectedValue) =>
          setSelectedMonth(selectedValue.target.value)
        }
        options={months}
      />
      <Select
        placeholder="سال"
        className="flex-1 rounded-e-lg rounded-s-none"
        value={selectedYear}
        onChange={(selectedValue) =>
          setSelectedYear(selectedValue.target.value)
        }
        options={years}
      />
    </div>
  );
};

export default DatePicker;
