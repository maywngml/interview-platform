'use client';
import { useSearchParams } from 'next/navigation';
import { Modal } from 'src/components/ui';
import { convertStringDateFormat } from 'src/lib/utils';

export default function ScheduleModal() {
  const date = useSearchParams().get('date');

  return (
    <Modal className='text-center px-[60px]'>
      <h1 className='font-bold text-[20px] mb-[20px]'>
        {date && convertStringDateFormat(date)}
      </h1>
      <ul>
        <li className='flex gap-[20px] mb-[10px]'>
          <span>10:10 ~ 11:00</span>
          <span>3면접</span>
        </li>
        <li className='flex gap-[20px] mb-[10px]'>
          <span>10:10 ~ 11:00</span>
          <span>3면접</span>
        </li>
        <li className='flex gap-[20px] mb-[10px]'>
          <span>10:10 ~ 11:00</span>
          <span>3면접</span>
        </li>
        <li className='flex gap-[20px] mb-[10px]'>
          <span>10:10 ~ 11:00</span>
          <span>3면접</span>
        </li>
        <li className='flex gap-[20px] mb-[10px]'>
          <span>10:10 ~ 11:00</span>
          <span>3면접</span>
        </li>
        <li className='flex gap-[20px] mb-[10px]'>
          <span>10:10 ~ 11:00</span>
          <span>3면접</span>
        </li>
      </ul>
    </Modal>
  );
}
