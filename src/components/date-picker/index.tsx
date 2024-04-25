import React, { FC, useState, useEffect, ChangeEvent } from 'react';
import moment from 'moment-jalaali';
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
  value: Date | null;
  onChange: (date: Date) => void;
}

const DatePicker: FC<DatePickerProps> = ({ onChange, value }) => {
  const [selectedDay, setSelectedDay] = useState<string>('');
  const [selectedMonth, setSelectedMonth] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');

  useEffect(() => {
    if (value) {
      const jalaliDate = moment(value).format('jYYYY/jM/jD').split('/');
      console.log({ value, jalaliDate });
      setSelectedYear(jalaliDate[0]);
      setSelectedMonth(jalaliDate[1].padStart(2, '0'));
      setSelectedDay(jalaliDate[2].padStart(2, '0'));
    }
  }, [value]);

  const handleDayChange = (selectedValue: string) => {
    setSelectedDay(selectedValue);
    updateDate(selectedValue, selectedMonth, selectedYear);
  };

  const handleMonthChange = (selectedValue: string) => {
    setSelectedMonth(selectedValue);
    updateDate(selectedDay, selectedValue, selectedYear);
  };

  const handleYearChange = (selectedValue: string) => {
    setSelectedYear(selectedValue);
    updateDate(selectedDay, selectedMonth, selectedValue);
  };

  const updateDate = (day: string, month: string, year: string) => {
    if (day && month && year) {
      const gregorianDate = moment(
        `${year}/${month}/${day}`,
        'jYYYY/jM/jD'
      ).toDate();
      onChange(gregorianDate);
    }
  };

  return (
    <div className="flex">
      <Select
        placeholder="روز"
        className="flex-1 rounded-s-lg rounded-e-none"
        value={selectedDay}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          handleDayChange(e.target.value)
        }
        options={days}
      />
      <Select
        placeholder="ماه"
        className="flex-[2] rounded-s-none rounded-e-none border-e-0 border-s-0"
        value={selectedMonth}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          handleMonthChange(e.target.value)
        }
        options={months}
      />
      <Select
        placeholder="سال"
        className="flex-1 rounded-e-lg rounded-s-none"
        value={selectedYear}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          handleYearChange(e.target.value)
        }
        options={years}
      />
    </div>
  );
};

export default DatePicker;
