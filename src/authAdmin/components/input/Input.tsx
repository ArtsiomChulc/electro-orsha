import { InputHTMLAttributes } from 'react';
import s from './Input.module.css';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
};

export const Input = ({ error, ...props }: InputProps) => {
    return (
        <>
            <input className={s.input} {...props} />
            {error && <span className={s.error}>{error}</span>}
        </>
    );
};
