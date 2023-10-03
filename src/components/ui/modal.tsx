'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import cn from 'clsx';

export default function Modal({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handlePressEscKey = (e: any) => {
    if (e.keyCode === 27) {
      router.back();
    }
  };

  const handleClickOuterLayer = (e: any) => {
    if (e.target.className.includes('outer-layer')) {
      router.back();
    }
  };

  useEffect(() => {
    addEventListener('keydown', handlePressEscKey);
    return () => {
      removeEventListener('keydown', handlePressEscKey);
    };
  }, []);

  return (
    <div
      className='outer-layer fixed flex justify-center items-center left-0 top-0 w-full h-full bg-gray-50 z-20'
      onClick={handleClickOuterLayer}
    >
      <div className={cn(className, 'bg-white  rounded-[20px] p-[40px]')}>
        {children}
      </div>
    </div>
  );
}
