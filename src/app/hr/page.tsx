import { WeeklyCalendar } from 'src/components/common';

export default function HR() {
  return (
    <section className='p-[40px]'>
      <h3 className='text-[25px] font-bold mb-[20px] leading-normal'>
        전체 면접 일정
      </h3>
      <WeeklyCalendar />
    </section>
  );
}
