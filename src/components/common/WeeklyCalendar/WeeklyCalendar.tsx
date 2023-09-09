'use client';
import { useState, useEffect } from 'react';
import cn from 'clsx';
import {
  format,
  addWeeks,
  subWeeks,
  startOfWeek,
  lastDayOfWeek,
  addDays,
} from 'date-fns';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from 'src/components/ui';
import { date } from 'src/data/utils/WeeklyCalendar';
import s from './WeeklyCalendar.module.css';

// TODO: 스케줄 가져오는 함수를 props로 받도록 해야 함
export default function WeeklyCalendar() {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentStartWeekDay, setCurrentStartWeekDay] = useState<Date>(
    startOfWeek(currentMonth)
  );
  const [currentLastWeekDay, setCurrentLastWeekDay] = useState<Date>(
    lastDayOfWeek(currentMonth)
  );
  const today = new Date();

  type scheduleType = {
    [key: string]: string[];
  };
  const tempDate1 = '20230911';
  const tempDate2 = '20230913';
  const tempSchedule: scheduleType = {
    [tempDate1]: [
      '10:00 ~ 11:00 3면접',
      '11:00 ~ 12:00 3면접',
      '12:00 ~ 13:00 3면접',
      '13:00 ~ 14:00 3면접',
      '14:00 ~ 15:00 3면접',
      '14:00 ~ 15:00 3면접',
      '14:00 ~ 15:00 3면접',
      '14:00 ~ 15:00 3면접',
    ],
    [tempDate2]: [
      '10:00 ~ 11:00 3면접',
      '11:00 ~ 12:00 3면접',
      '12:00 ~ 13:00 3면접',
      '13:00 ~ 14:00 3면접',
    ],
  };

  const changeCurrentMonth = (month: Date) => {
    setCurrentMonth(month);
    setCurrentStartWeekDay(startOfWeek(month));
    setCurrentLastWeekDay(lastDayOfWeek(month));
  };

  const getCalendarMonth = (startWeekDay: Date, lastWeekDay: Date) => {
    const startWeekMonth = format(startWeekDay, 'M');
    const lastWeekMonth = format(lastWeekDay, 'M');
    if (startWeekMonth === lastWeekMonth) {
      return `${startWeekMonth}월`;
    } else {
      return `${startWeekMonth}월 - ${lastWeekMonth}월`;
    }
  };

  const isToday = (renderDate: Date) => {
    return format(renderDate, 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd');
  };

  const handleClickLeftArrow = () => {
    const prevMonth = subWeeks(currentMonth, 1);
    changeCurrentMonth(prevMonth);
  };

  const handleClickRightArrow = () => {
    const nextMonth = addWeeks(currentMonth, 1);
    changeCurrentMonth(nextMonth);
  };

  const handleClickToday = () => {
    changeCurrentMonth(today);
  };

  useEffect(() => {
    console.log(currentStartWeekDay, currentLastWeekDay, today);
  }, [currentStartWeekDay, currentLastWeekDay, today]);

  return (
    <div className={s.calendar}>
      <div className={s.monthView}>
        <ArrowBackIosNewIcon
          className={s.arrow}
          onClick={handleClickLeftArrow}
        />
        <p className={s.month}>
          {format(currentMonth, 'yyyy')}년{' '}
          {getCalendarMonth(currentStartWeekDay, currentLastWeekDay)}
        </p>
        <ArrowForwardIosIcon
          className={s.arrow}
          onClick={handleClickRightArrow}
        />
      </div>
      <Button
        className={s.todayButton}
        onClick={handleClickToday}
      >
        today
      </Button>
      <table className={s.table}>
        <thead>
          <tr>
            {date.map((text, index) => {
              const renderDate = addDays(currentStartWeekDay, index);
              return (
                <th
                  className={s.header}
                  key={`th-${index}`}
                >
                  <p>{text}</p>
                  <div
                    className={cn(
                      s.dateWrapper,
                      isToday(renderDate) && s.today
                    )}
                  >
                    <p className={s.date}>{+format(renderDate, 'dd')}</p>
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Array.from({ length: 7 }, (_, index) => index + 1).map(
              (row, rowIndex) => {
                const renderDate = format(
                  addDays(currentStartWeekDay, rowIndex),
                  'yyyyMMdd'
                );
                return (
                  <td
                    className={s.schedule}
                    key={`td-${rowIndex}`}
                  >
                    {tempSchedule[renderDate]?.map(
                      (schedule, scheduleIndex) => (
                        <p key={`schedule-${renderDate}-${scheduleIndex}`}>
                          {schedule}
                        </p>
                      )
                    )}
                  </td>
                );
              }
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
