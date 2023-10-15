'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import cn from 'clsx';
import {
  format,
  addWeeks,
  subWeeks,
  startOfWeek,
  lastDayOfWeek,
  addDays,
} from 'date-fns';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from 'src/components/ui/select';
import { selectOptionType } from 'src/types/utils/selectOption';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from '../ui';
import { useUI } from '../ui/context';
import { date } from 'src/data/schedule/weekly-schedule';

// TODO: 스케줄 가져오는 함수를 props로 받도록 해야 함
export default function WeeklySchedule() {
  const { openModal, setModalView } = useUI();
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
  const tempDate1 = '2023-10-03';
  const tempDate2 = '2023-10-05';
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
  const tempOptions: selectOptionType[] = [
    {
      key: 'ai',
      name: 'AI',
      value: 'ai',
    },
    {
      key: 'web',
      name: 'WEB',
      value: 'web',
    },
    {
      key: 'db',
      name: 'DB',
      value: 'db',
    },
  ];

  const changeCurrentMonth = (month: Date) => {
    setCurrentMonth(month);
    setCurrentStartWeekDay(startOfWeek(month));
    setCurrentLastWeekDay(lastDayOfWeek(month));
  };

  const getScheduleMonth = (startWeekDay: Date, lastWeekDay: Date) => {
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

  const handleClickMore = () => {
    setModalView('SCHEDULE_VIEW');
    openModal();
  };

  useEffect(() => {
    console.log(currentStartWeekDay, currentLastWeekDay, today);
  }, [currentStartWeekDay, currentLastWeekDay, today]);

  return (
    <div className='bg-white relative h-[calc(100vh-235px)] p-[55px] rounded-[10px]'>
      <div className='flex justify-center items-center gap-[10px] leading-normal'>
        <ArrowBackIosNewIcon
          className='text-green cursor-pointer'
          onClick={handleClickLeftArrow}
        />
        <p className='text-[25px] font-bold'>
          {format(currentMonth, 'yyyy')}년{' '}
          {getScheduleMonth(currentStartWeekDay, currentLastWeekDay)}
        </p>
        <ArrowForwardIosIcon
          className='text-green cursor-pointer'
          onClick={handleClickRightArrow}
        />
      </div>
      <Select>
        <SelectTrigger className='absolute top-[50px] right-[55px] w-[130px]'>
          <SelectValue placeholder='직군 선택' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {tempOptions.map(({ key, name, value }) => (
              <SelectItem
                key={key}
                value={value}
              >
                {name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button
        className='uppercase font-bold text-[18px] mt-[10px]'
        onClick={handleClickToday}
      >
        today
      </Button>
      <table className='mt-[10px] w-full h-[calc(100%-92px)] border-solid border-t-[1px] border-gray-100'>
        <thead>
          <tr>
            {date.map((text, index) => {
              const renderDate = addDays(currentStartWeekDay, index);
              return (
                <th
                  className='font-normal text-[14px] p-[10px] border-solid border-r-[1px] border-gray-100 first:text-red-500 last:border-none'
                  key={`th-${index}`}
                >
                  <p>{text}</p>
                  <div
                    className={cn(
                      'rounded-full w-[26px] h-[26px] mx-auto text-[14px]',
                      isToday(renderDate) && 'bg-green text-white'
                    )}
                  >
                    <p>{+format(renderDate, 'dd')}</p>
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
                  'yyyy-MM-dd'
                );
                return (
                  <td
                    className='border-solid border-r-[1px] px-[20px] text-left align-top w-[150px] text-[14px] overflow-hidden whitespace-nowrap border-gray-100 last:border-none'
                    key={`td-${rowIndex}`}
                  >
                    {tempSchedule[renderDate]
                      ?.slice(0, 6)
                      .map((schedule, scheduleIndex) => (
                        <p key={`schedule-${renderDate}-${scheduleIndex}`}>
                          {schedule}
                        </p>
                      ))}
                    {tempSchedule[renderDate]?.length > 6 && (
                      <Link
                        href={`?date=${renderDate}`}
                        className='font-bold mt-[15px]'
                        onClick={handleClickMore}
                      >
                        더보기
                      </Link>
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
