import { ButtonHTMLAttributes } from 'react'
import cn from 'clsx'
import Lottie from "lottie-react";
import s from './Button.module.css'
import Spinner from 'public/lottie/Spinner.json'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: React.ReactNode;
    isLoading?: boolean;
    isDisabled?: boolean;
    type?: 'button' | 'submit' | 'reset' | undefined;
}

export default function Button(props: ButtonProps) {
    const { className, children, isLoading, isDisabled, type, ...rest } = props;

    return <button className={cn(className, s.button, s.bg)} type={type} {...rest}>
        {isLoading ? <Lottie className='w-[30px] h-[30px]' animationData={Spinner}></Lottie> : children}
    </button >
}