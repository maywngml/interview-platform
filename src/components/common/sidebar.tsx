'use client';
import { useState } from 'react';
import Link from 'next/link';
import cn from 'clsx';
import { menu } from 'src/data/hr/menu';
import type { menuType } from 'src/types/utils/menu';
import s from './Sidebar.module.css';

export default function Sidebar() {
  const [selectedMenuId, setSelectedMenuId] = useState<string>('home');

  const handleClick = (id: string) => {
    setSelectedMenuId(id);
  };

  return (
    <div className='fixed left-0 top-0 w-[280px] h-[100vh] bg-white border-solid border-r-[1px] border-gray-300 p-[30px]'>
      <div className='flex gap-[20px] items-center'>
        <div className='w-[60px] h-[60px] bg-gray-500 rounded-full' />
        <p className='text-[22px] text-gray-800 font-bold leading-normal'>
          회사명
        </p>
      </div>
      <ul className='mt-[64px]'>
        {menu.map(({ id, href, name, Icon }: menuType) => (
          <li key={`menu-${id}`}>
            <Link
              className={cn(
                'flex gap-[10px] items-center font-bold bg-transparent text-gray-800 text-[18px] p-[13px]',
                selectedMenuId === id && 'bg-green text-white rounded-[10px]'
              )}
              href={href}
              onClick={() => handleClick(id)}
            >
              <Icon className='w-[35px] h-[35px]' />
              <p>{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
