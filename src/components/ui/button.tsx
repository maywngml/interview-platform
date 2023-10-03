import { ButtonHTMLAttributes } from 'react';
import cn from 'clsx';
import Lottie from 'lottie-react';
import Spinner from 'public/lottie/Spinner.json';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export default function Button(props: ButtonProps) {
  const { className, children, isLoading, isDisabled, type, ...rest } = props;

  return (
    <button
      className={cn(
        className,
        'rounded-[10px] flex justify-center items-center hover:opacity-70'
      )}
      type={type}
      {...rest}
    >
      {isLoading ? (
        <Lottie
          className='w-[30px] h-[30px]'
          animationData={Spinner}
        ></Lottie>
      ) : (
        children
      )}
    </button>
  );
}
