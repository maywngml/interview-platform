'use client';
import { useState, useEffect } from 'react';
import { format, addWeeks, subWeeks, startOfWeek, addDays } from 'date-fns';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { date } from 'src/data/utils/WeeklyCalendar';
import s from './WeeklyCalendar.module.css';

// TODO: 스케줄 가져오는 함수를 props로 받도록 해야 함
export default function WeeklyCalendar() {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [startWeekDay, setStartWeekDay] = useState<Date>(
    startOfWeek(currentMonth)
  );

  const handleLeftArrowClick = () => {
    const prevMonth = subWeeks(currentMonth, 1);
    setCurrentMonth(prevMonth);
    setStartWeekDay(startOfWeek(prevMonth));
  };

  const handleRightArrowClick = () => {
    const nextMonth = addWeeks(currentMonth, 1);
    setCurrentMonth(nextMonth);
    setStartWeekDay(startOfWeek(nextMonth));
  };

  useEffect(() => {
    console.log(`${format(addDays(currentMonth, 1), 'yyyy-MM-dd')}`);

    console.log(`${format(currentMonth, 'yyyy-MM-dd')}`, startWeekDay);
  }, [currentMonth]);

  return (
    <div className={s.calendar}>
      <div className={s.header}>
        <ArrowBackIosNewIcon
          className={s.arrow}
          onClick={handleLeftArrowClick}
        />
        <p className={s.month}>
          {format(currentMonth, 'yyyy')}년 {format(currentMonth, 'M')}월
        </p>
        <ArrowForwardIosIcon
          className={s.arrow}
          onClick={handleRightArrowClick}
        />
      </div>
      <table className={s.table}>
        <thead>
          <tr>
            {date.map((text, index) => (
              <th
                className={s.date}
                key={`th-${index}`}
              >
                <p>{text}</p>
                <p>{+format(addDays(startWeekDay, index), 'dd')}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Array.from({ length: 7 }, (_, index) => index + 1).map((row) => {
              return <td className={s.schedule}></td>;
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
