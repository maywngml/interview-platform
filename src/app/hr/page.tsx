import { WeeklyCalendar } from 'src/components/common';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from 'src/components/ui/select';
import { selectOptionType } from 'src/types/utils/selectOption';

export default function HR() {
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

  return (
    <section className='p-[40px]'>
      <h3 className='text-[25px] font-bold mb-[20px] leading-normal'>
        전체 면접 일정
      </h3>
      <WeeklyCalendar />
      <Select>
        <SelectTrigger className='absolute top-[245px] right-[100px] w-[130px]'>
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
    </section>
  );
}
