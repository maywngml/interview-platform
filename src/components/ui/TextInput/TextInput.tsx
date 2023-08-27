import { InputHTMLAttributes, Dispatch, SetStateAction, ChangeEvent } from 'react'
import cn from 'clsx'
import s from './TextInput.module.css'

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    value: string;
    changeValue: Dispatch<SetStateAction<string>>;
}

export default function TextInput(props: PasswordInputProps) {
    const { className, value, changeValue, ...rest } = props;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        changeValue(e.target.value);
    }

    return <input className={cn(className, s.text)} value={value} onChange={handleChange} type='text' {...rest}></input>
}