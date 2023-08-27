import { useState, InputHTMLAttributes, Dispatch, SetStateAction, ChangeEvent } from 'react';
import cn from 'clsx'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import s from './PasswordInput.module.css'

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    value: string;
    changeValue: Dispatch<SetStateAction<string>>;
}

export default function PasswordInput(props: PasswordInputProps) {
    const { className, value, changeValue, ...rest } = props;
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(false)

    const handleClick = () => {
        setIsVisible(prevVisible => !prevVisible)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        changeValue(e.target.value);
    }

    const handleFocusInOut = () => {
        setIsFocus(prevFocus => !prevFocus)
    }

    return <div className={cn(className, s.passwordWrapper, isFocus && s.focus)} onFocus={handleFocusInOut} onBlur={handleFocusInOut}>
        <input className={s.password} type={isVisible ? 'text' : 'password'} value={value} onChange={handleChange} {...rest}>
        </input> {
            isVisible ? <Visibility className={s.visibilityIcon} onClick={handleClick} /> : <VisibilityOff className={s.visibilityIcon} onClick={handleClick} />
        }
    </div>
}