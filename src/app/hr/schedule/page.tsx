'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HRSchedule() {
  const router = useRouter();

  useEffect(() => {
    router.push('/hr');
  });
  return <div></div>;
}
