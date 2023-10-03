import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertStringDateFormat(stringDate: string) {
  const [year, month, date] = stringDate.split('-');
  return `${year}년 ${+month}월 ${+date}일`;
}
