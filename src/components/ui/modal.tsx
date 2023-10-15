'use client';
import { useEffect } from 'react';

export default function Modal({
  onClose,
  children,
}: {
  onClose: () => void;
  children: React.ReactNode;
}) {
  const handlePressEscKey = (e: any) => {
    if (e.keyCode === 27) {
      onClose();
    }
  };

  const handleClickOuterLayer = (e: any) => {
    if (e.target.className.includes('outer-layer')) {
      onClose();
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
      <div className='bg-white  rounded-[20px] p-[40px]'>{children}</div>
    </div>
  );
}
